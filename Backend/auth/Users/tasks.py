# Create your tasks here
import time
from celery import shared_task



@shared_task
def cook_pizza(email, customer):
    time.sleep(1)
    message = 'Hey {}! \n\n Your pizza is cooked!'.format(customer)
    #send_email('Pizza cooked!', message, [email])
    print(message)
    return 'Pizza cooked!'

@shared_task
def bill(email, customer):
    time.sleep(1)
    message = 'Hello {}! \n\n Your pizza billing is ok!'.format(customer)
    #send_email('Pizza cooked!', message, [email])
    print(message)
    return 'Billing ok!'

