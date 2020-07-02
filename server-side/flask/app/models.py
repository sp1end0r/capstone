from app import db
from hashlib import md5
from datetime import datetime
from sqlalchemy.sql import func

class Post(db.Model):
    __tablename__ = "post_tbl"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}

    id = db.Column(db.Integer, primary_key=True)
    post_title = db.Column(db.String(128))
    post_image = db.Column(db.String(100))
    post_written_date = db.Column(db.DATETIME, default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user_tbl.id'))

    def __init__(self, **kwargs):
        self.id = kwargs.get('id')
        self.post_title = kwargs.get('post_title')
        self.post_image = kwargs.get('post_image')

    def __repr__(self):
        return f"<POST('{self.id}', '{self.post_title}', '{self.post_image}')>"

    def as_dict(self):
        return {x.name: getattr(self, x.name) for x in self.__table__.columns}
