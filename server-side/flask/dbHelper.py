import contextlib
from app import db


@contextlib.contextmanager
def get_session():
    session = db.session()
    try:
        yield session
    except Exception as e:
        session.rollback()
        raise e
    else:
        session.commit()
