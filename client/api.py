from nanoid import generate


def save_file(file_content):
    filename = generate()
    full_path = f'clientdata/{filename}'
    f = open(full_path, 'a')
    f.write(str(file_content))
    f.close()
    return full_path
