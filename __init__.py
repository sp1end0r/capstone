from .codec import PolylineCodec

__version__ = '1.4.0'

def decode(expression, precision=5, geojson=False):
    return PolylineCodec().decode(expression, precision, geojson)

def encode(coordinates, precision=5, geojson=False):
    return PolylineCodec().encode(coordinates, precision, geojson)

__all__ = ['decode', 'encode']