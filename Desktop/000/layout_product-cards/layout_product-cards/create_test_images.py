from PIL import Image, ImageDraw, ImageFont
import os

# Cria a pasta images se não existir
os.makedirs('src/images', exist_ok=True)

for i in range(1, 7):
    img = Image.new('RGB', (200, 200), color=(255, 255, 255))
    d = ImageDraw.Draw(img)
    d.text((60, 90), f'Produto {i}', fill=(0, 0, 0))
    img.save(f'src/images/product-{i}.jpg')

