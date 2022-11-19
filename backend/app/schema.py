# pydantic models
from pydantic import BaseModel
import datetime, enum

class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str

class Userlogin(BaseModel):
    email: str
    password: str
