from nanoid import generate
import hashlib

KILO_BYTE = 1024


def get_checksum_of_file(filename):
    return hashlib.md5(open(filename, 'rb').read()).hexdigest()


def save_generated_str():
    data = generate(size=KILO_BYTE)
    filename = generate()
    full_path = f'serverdata/{filename}'

    f = open(full_path, 'a')
    f.write(data)
    f.close()
    return full_path
