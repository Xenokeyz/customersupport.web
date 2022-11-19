from fastapi import FastAPI, status, HTTPException, Depends
import schema
from models import (
     User
)
from utils import (
    get_hashed_pword,
    verify_password,
    make_access_token
)

from db import Base, engine, SessionLocal
from sqlalchemy.orm import Session

# create the database.
Base.metadata.create_all(engine)

def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()
# create the router to initialize the endpoints
app = FastAPI()

# create the endpoint
@app.post('/login', summary = "create access token for the a logged in user")
async def login(get_user: schema.Userlogin, session: Session = Depends(get_session)):
    # get the user from the database
    user = session.query(User).filter(User.email == get_user.email).first()
    # if the user is None, return an Exception
    if user is None:
        raise HTTPException(
            status_code = status.HTTP_400_BAD_REQUEST,
            detail = "No User with such Email"
        )
    # if the user is not None, verify the password
    # get the password from the database.
    get_user_pass = user.hashed_password
    # verify the password
    if not verify_password(get_user.password, get_user_pass):
        raise HTTPException(
            status_code = status.HTTP_400_BAD_REQUEST,
            detail = "Incorrect Email or password Combination"
        )
    # if the password is verified, create the access token
    access_token = make_access_token(user.email)
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }
    
