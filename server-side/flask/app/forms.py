from flask import abort
from flask_wtf import FlaskForm
from app.models import User
import re
from wtforms import StringField, PasswordField, BooleanField, RadioField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo
from flask_wtf.file import FileField, FileRequired

class UploadForm(FlaskForm):
    post_title = StringField('Title', validators=[DataRequired()])
    post_image = FileField('Image', validators=[FileRequired()])
    post_image_name = StringField('Image Name', validators=[DataRequired])

