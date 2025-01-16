import json

# Uzun metni JSON formatına uygun şekilde işlemek için
long_text = """
MADDE 6 - (Başlığıyla Birlikte Değişik:RG-5/12/2015-29553)3
(1) Kurslar, karayollarında seyreden araçların cins ve gruplarına göre aşağıda belirtilen
sertifika sınıflarında eğitim verirler:
a) “M” sınıfı sertifika.
b) “A1” sınıfı sertifika.
c) “A2” sınıfı sertifika.
ç) “A” sınıfı sertifika.
d) “B1” sınıfı sertifika.
e) “B” sınıfı sertifika.
f) “BE” sınıfı sertifika.
g) “C1” sınıfı sertifika.
ğ) “C1E” sınıfı sertifika.
h) “C” sınıfı sertifika.
ı) “CE” sınıfı sertifika.
i) “D1” sınıfı sertifika.
j) “D1E” sınıfı sertifika.
k) “D” sınıfı sertifika.
l) “DE” sınıfı sertifika.
m) “F” sınıfı sertifika.
n) “G” sınıfı sertifika.
(2) Birinci fıkrada yer alan sertifika sınıfına ait araçların otomatik şanzımanlı olanları ile
eğitim alıp sınavda başarılı olanların sertifikalarında sadece otomatik araç kullanabilecekleri
belirtilir.
(3) Bu Yönetmelikte belirtilen şartlar ve esaslara göre araç sürmeyi öğrenmek üzere
kursiyerlere eğitim ve sınavlarda araçları kullanmaları için kurs müdürlüklerince (Ek
ibare:RG-7/3/2017-30000) akan trafikte direksiyon eğitimi dersinin başladığı tarihten
itibaren 6 ay süreyle geçerli “K Sınıfı Sürücü Aday Belgesi” düzenlenir.
"""


# \n karakterlerini <br> ile değiştir


# JSON olarak oluştur
json_data = {"value": long_text}
print(json.dumps(json_data, ensure_ascii=False, indent=4))
