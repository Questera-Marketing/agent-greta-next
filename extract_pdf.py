import pypdf
import os

pdf_path = '/home/pankaj/.openclaw/media/inbound/2984bddc-4b77-430c-a120-27b42d6da80b.pdf'
reader = pypdf.PdfReader(pdf_path)

for p_idx, page in enumerate(reader.pages):
    for i_idx, image in enumerate(page.images):
        filename = f"extracted_p{p_idx+1}_img{i_idx}.{image.name.split('.')[-1] if '.' in image.name else 'png'}"
        with open(filename, "wb") as fp:
            fp.write(image.data)
        print(f"Saved {filename}")
