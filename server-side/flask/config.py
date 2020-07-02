import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY') or 'capstone12!'
    # SQLALCHEMY_DATABASE_URI = os.getenv('CERT_DATABASE_URL') or 'sqllite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:root@localhost/capstone'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER = basedir + '\\app\\static\\upload_folder'
