from passlib.context import CryptContext
import os
from datetime import datetime, timedelta
from typing import Union, Any
from jose import jwt
from dotenv import load_dotenv

# load environment variables
load_dotenv()
# set some constants
# Access token generated expires in 6 hours.
ACCESS_TOKEN_EXPIRATION = 60 * 6 
# algorithm to be used to generate the token
ALGORITHM  = os.environ.get('ALGORITHM')
# JSON web token secret key
JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
# set the password_context.
pword_context = CryptContext(schemes = ["bcrypt"], deprecated = "auto")

# create the function to hash the password.
def get_hashed_pword(password: str) -> str:
    return pword_context.hash(password)

# create the function to verify the password.
def verify_password(password: str, hashed_pass: str) -> bool:
    return pword_context.verify(password, hashed_pass)

# create a function to generate the token.
def make_access_token(subject: Union[str, Any], time_expires: int = None) -> str:
    # if the time_expires is set., set it to the default value.
    if time_expires is not None:
        time_expires += datetime.utcnow()
    else:
        time_expires = datetime.utcnow() + timedelta(minutes = ACCESS_TOKEN_EXPIRATION)
        
    # create the token.
    token_to_encode = {"expires": str(time_expires), "sub": str(subject)}
    
    token = jwt.encode(token_to_encode, JWT_SECRET_KEY, ALGORITHM)
    
    return token

