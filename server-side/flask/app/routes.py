from datetime import datetime
import os
from app import app, models
from flask import render_template, request, redirect, url_for, flash, abort

@app.route('/')
def index():
    return render_template('index.html', posts=[])

@app.route('/gallery', methods=['GET', 'POST'])
def photo_gallery():
    posts = models.Post.query.all()
    return render_template('gallery.html', posts=posts)

@app.route('/view/<post_id>', methods=['GET', 'POST'])
def photo_view(post_id):
    post = models.Post.query.filter_by(id=post_id).first()
    return render_template('photo_view.html', post=post)

@app.route('/gallery/upload', methods=['GET', 'POST'])
def upload():
    form = UploadForm()
    if request.method == 'POST':
        post_image = form.post_image.data
        if not post_image:
            flash('No Chosen')
            return redirect(url_for('index'))
        post_image.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(post_image.filename)))
        post = models.Post(post_title=form.post_title.data, post_image=secure_filename(post_image.filename))
        post.author = current_user
        try:
            with dbHelper.get_session() as session:
                session.add(post)
        except Exception as e:
            return render_template('gallery.html', error=str(e))
        return redirect(url_for('photo_gallery'))
    return redirect(url_for('photo_gallery'))
