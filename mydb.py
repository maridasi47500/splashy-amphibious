from user import User
from job import Job
from country import Country
from schedule import Schedule
from booking import Booking
from application import Application
from checkout import Checkout
class Mydb():
  def __init__(self):
    self.hey="hello"
    self.User=User()
    self.Job=Job()
    self.Schedule=Schedule()
    self.Booking=Booking()
    self.Country=Country()
    self.Application=Application()
    self.Checkout=Checkout()
