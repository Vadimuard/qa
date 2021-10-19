from nanoid import generate
from constants import SERVER_DATA
KILO_BYTE = 1024


def save_generated_str():
    data = generate(size=KILO_BYTE)
    filename = generate()
    full_path = f'{SERVER_DATA}/{filename}'

    f = open(full_path, 'a')
    f.write(data)
    f.close()
    return full_path
