const sharp = require('sharp')

sharp('Jack.png').resize(80).toFile('Reescalado.png')