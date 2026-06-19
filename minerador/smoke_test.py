import docx
import rapidfuzz
import sentence_transformers
from sentence_transformers import SentenceTransformer
import torch

print(f"python-docx           : {docx.__version__}")
print(f"rapidfuzz             : {rapidfuzz.__version__}")
print(f"sentence-transformers : {sentence_transformers.__version__}")
print(f"torch                 : {torch.__version__} (CUDA: {torch.cuda.is_available()})")

print("\nCarregando modelo paraphrase-multilingual-MiniLM-L12-v2 ...")
model = SentenceTransformer("paraphrase-multilingual-MiniLM-L12-v2")

test = model.encode(["picking cart", "separação por carrinho"])
print(f"Embedding shape: {test.shape}")

print("\nAmbiente OK")
