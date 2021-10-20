import hashlib


def get_checksum_of_file(filename):
    return hashlib.md5(open(filename, 'rb').read()).hexdigest()


def save_file(filename, file_content):
    full_path = f'clientdata/{filename}'
    f = open(full_path, 'a')
    f.write(str(file_content))
    f.close()
    return full_path
