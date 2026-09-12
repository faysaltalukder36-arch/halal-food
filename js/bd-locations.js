// Bangladesh nationwide district -> upazila data.
// District and upazila names are based on the Bangladesh National Information Portal's
// current nationwide list (64 districts; 499 entries shown on the portal page).
const BD_LOCATIONS = {
  "Dhaka": [
    "Dhamrai",
    "Dohar",
    "Keraniganj",
    "Nawabganj",
    "Savar"
  ],
  "Faridpur": [
    "Alfadanga",
    "Bhanga",
    "Boalmari",
    "Charbhadrasan",
    "Faridpur Sadar",
    "Madhukhali",
    "Nagarkanda",
    "Sadarpur",
    "Saltha"
  ],
  "Gazipur": [
    "Gazipur Sadar",
    "Kaliakair",
    "Kaliganj",
    "Kapasia",
    "Sreepur"
  ],
  "Gopalganj": [
    "Gopalganj Sadar",
    "Kashiani",
    "Kotalipara",
    "Muksudpur",
    "Tungipara"
  ],
  "Kishoreganj": [
    "Austagram",
    "Bajitpur",
    "Bhairab",
    "Hossainpur",
    "Itna",
    "Karimganj",
    "Katiadi",
    "Kishoreganj Sadar",
    "Kuliarchar",
    "Mithamoin",
    "Nikli",
    "Pakundia",
    "Tarail"
  ],
  "Madaripur": [
    "Kalkini",
    "Madaripur Sadar",
    "Rajoir",
    "Shibchar",
    "Dasar"
  ],
  "Manikganj": [
    "Daulatpur",
    "Ghior",
    "Harirampur",
    "Manikganj Sadar",
    "Saturia",
    "Shibaloy",
    "Singair"
  ],
  "Munshiganj": [
    "Gazaria",
    "Lohajang",
    "Munshiganj Sadar",
    "Sirajdikhan",
    "Sreenagar",
    "Tongibari"
  ],
  "Narayanganj": [
    "Araihazar",
    "Sonargaon",
    "Narayanganj Sadar",
    "Rupganj",
    "Bandar"
  ],
  "Narsingdi": [
    "Belabo",
    "Monohardi",
    "Narsingdi Sadar",
    "Palash",
    "Raipura",
    "Shibpur"
  ],
  "Rajbari": [
    "Baliakandi",
    "Goalanda",
    "Kalukhali",
    "Pangsha",
    "Rajbari Sadar"
  ],
  "Shariatpur": [
    "Bhedarganj",
    "Damudya",
    "Gosairhat",
    "Naria",
    "Shariatpur Sadar",
    "Zajira"
  ],
  "Tangail": [
    "Basail",
    "Bhuapur",
    "Delduar",
    "Dhanbari",
    "Ghatail",
    "Gopalpur",
    "Kalihati",
    "Madhupur",
    "Mirzapur",
    "Nagarpur",
    "Sakhipur",
    "Tangail Sadar"
  ],
  "Bagerhat": [
    "Chitalmari",
    "Fakirhat",
    "Kachua",
    "Mollahat",
    "Mongla",
    "Morrelganj",
    "Rampal",
    "Sharankhola",
    "Bagerhat Sadar"
  ],
  "Chuadanga": [
    "Alamdanga",
    "Chuadanga Sadar",
    "Damurhuda",
    "Jibannagar"
  ],
  "Jashore": [
    "Abhaynagar",
    "Bagherpara",
    "Chaugachha",
    "Jhikargachha",
    "Keshabpur",
    "Jashore Sadar",
    "Manirampur",
    "Sharsha"
  ],
  "Jhenaidah": [
    "Harinakunda",
    "Jhenaidah Sadar",
    "Kaliganj",
    "Kotchandpur",
    "Maheshpur",
    "Shailkupa"
  ],
  "Khulna": [
    "Batiaghata",
    "Dacope",
    "Dumuria",
    "Koyra",
    "Paikgachha",
    "Phultala",
    "Rupsa",
    "Terokhada",
    "Dighalia"
  ],
  "Kushtia": [
    "Bheramara",
    "Daulatpur",
    "Khoksa",
    "Kumarkhali",
    "Kushtia Sadar",
    "Mirpur"
  ],
  "Magura": [
    "Magura Sadar",
    "Mohammadpur",
    "Shalikha",
    "Sreepur"
  ],
  "Meherpur": [
    "Gangni",
    "Mujibnagar",
    "Meherpur Sadar"
  ],
  "Narail": [
    "Kalia",
    "Lohagara",
    "Narail Sadar"
  ],
  "Satkhira": [
    "Assasuni",
    "Debhata",
    "Kalaroa",
    "Kaliganj",
    "Satkhira Sadar",
    "Shyamnagar",
    "Tala"
  ],
  "Bandarban": [
    "Alikadam",
    "Bandarban Sadar",
    "Lama",
    "Naikhongchhari",
    "Rowangchhari",
    "Ruma",
    "Thanchi"
  ],
  "Brahmanbaria": [
    "Akhaura",
    "Banchharampur",
    "Bijoynagar",
    "Brahmanbaria Sadar",
    "Ashuganj",
    "Kasba",
    "Nabinagar",
    "Nasirnagar",
    "Sarail"
  ],
  "Chandpur": [
    "Chandpur Sadar",
    "Faridganj",
    "Haimchar",
    "Hajiganj",
    "Kachua",
    "Matlab South",
    "Matlab North",
    "Shahrasti"
  ],
  "Chattogram": [
    "Anwara",
    "Banshkhali",
    "Boalkhali",
    "Chandanaish",
    "Fatikchhari",
    "Hathazari",
    "Lohagara",
    "Mirsharai",
    "Patiya",
    "Rangunia",
    "Raozan",
    "Sandwip",
    "Satkania",
    "Sitakunda",
    "Karnafuli"
  ],
  "Cumilla": [
    "Barura",
    "Brahmanpara",
    "Burichang",
    "Chandina",
    "Chauddagram",
    "Cumilla Adarsha Sadar",
    "Cumilla Sadar Dakshin",
    "Daudkandi",
    "Debidwar",
    "Homna",
    "Laksam",
    "Monoharganj",
    "Meghna",
    "Muradnagar",
    "Nangalkot",
    "Titas",
    "Lalmai"
  ],
  "Cox's Bazar": [
    "Chakaria",
    "Cox's Bazar Sadar",
    "Kutubdia",
    "Maheshkhali",
    "Pekua",
    "Ramu",
    "Teknaf",
    "Ukhia",
    "Eidgaon"
  ],
  "Feni": [
    "Chhagalnaiya",
    "Daganbhuiyan",
    "Feni Sadar",
    "Fulgazi",
    "Parshuram",
    "Sonagazi"
  ],
  "Khagrachhari": [
    "Dighinala",
    "Manikchhari",
    "Khagrachhari Sadar",
    "Lakshmichhari",
    "Mahalchhari",
    "Matiranga",
    "Panchhari",
    "Ramgarh",
    "Guimara"
  ],
  "Lakshmipur": [
    "Kamalnagar",
    "Lakshmipur Sadar",
    "Raipur",
    "Ramganj",
    "Ramgati",
    "Chandraganj"
  ],
  "Noakhali": [
    "Begumganj",
    "Chatkhil",
    "Companiganj",
    "Hatiya",
    "Senbagh",
    "Sonaimuri",
    "Subarnachar",
    "Noakhali Sadar",
    "Kabirhat"
  ],
  "Rangamati": [
    "Baghaichhari",
    "Barkal",
    "Kawkhali",
    "Kaptai",
    "Juraichhari",
    "Langadu",
    "Naniarchar",
    "Rangamati Sadar",
    "Rajasthali",
    "Belaichhari"
  ],
  "Bogra": [
    "Adamdighi",
    "Bogra Sadar",
    "Dhunat",
    "Dupchanchia",
    "Gabtali",
    "Kahaloo",
    "Nandigram",
    "Sariakandi",
    "Shajahanpur",
    "Sherpur",
    "Shibganj",
    "Sonatala",
    "Mokamtala"
  ],
  "Joypurhat": [
    "Akkelpur",
    "Joypurhat Sadar",
    "Kalai",
    "Panchbibi",
    "Khetlal"
  ],
  "Naogaon": [
    "Atrai",
    "Dhamoirhat",
    "Manda",
    "Mohadevpur",
    "Naogaon Sadar",
    "Niamatpur",
    "Patnitala",
    "Raninagar",
    "Sapahar",
    "Badalgachhi",
    "Porsha"
  ],
  "Natore": [
    "Bagatipara",
    "Baraigram",
    "Gurudaspur",
    "Lalpur",
    "Natore Sadar",
    "Singra",
    "Naldanga"
  ],
  "Chapainawabganj": [
    "Shibganj",
    "Bholahat",
    "Gomastapur",
    "Nachole",
    "Chapainawabganj Sadar"
  ],
  "Pabna": [
    "Atgharia",
    "Bera",
    "Bhangura",
    "Chatmohar",
    "Faridpur",
    "Ishwardi",
    "Pabna Sadar",
    "Santhia",
    "Sujanagar"
  ],
  "Rajshahi": [
    "Bagha",
    "Bagmara",
    "Charghat",
    "Durgapur",
    "Godagari",
    "Mohanpur",
    "Paba",
    "Puthia",
    "Tanore"
  ],
  "Sirajganj": [
    "Belkuchi",
    "Chauhali",
    "Kamarkhand",
    "Kazipur",
    "Raiganj",
    "Shahjadpur",
    "Sirajganj Sadar",
    "Tarash",
    "Ullapara"
  ],
  "Habiganj": [
    "Ajmiriganj",
    "Bahubal",
    "Baniachong",
    "Chunarughat",
    "Habiganj Sadar",
    "Lakhai",
    "Madhabpur",
    "Nabiganj",
    "Shayestaganj"
  ],
  "Moulvibazar": [
    "Barlekha",
    "Juri",
    "Kamolganj",
    "Kulaura",
    "Moulvibazar Sadar",
    "Rajnagar",
    "Sreemangal"
  ],
  "Sunamganj": [
    "Bishwambharpur",
    "Chhatak",
    "Derai",
    "Dharmapasha",
    "Dowarabazar",
    "Jagannathpur",
    "Jamalganj",
    "Shalla",
    "Sunamganj Sadar",
    "Tahirpur",
    "Shantiganj",
    "Madhyanagar"
  ],
  "Sylhet": [
    "Balaganj",
    "Beanibazar",
    "Bishwanath",
    "Companiganj",
    "Dakshin Surma",
    "Fenchuganj",
    "Golapganj",
    "Gowainghat",
    "Jaintiapur",
    "Kanaighat",
    "Sylhet Sadar",
    "Zakiganj",
    "Osmaninagar"
  ],
  "Dinajpur": [
    "Birampur",
    "Birganj",
    "Birol",
    "Bochaganj",
    "Chirirbandar",
    "Phulbari",
    "Ghoraghat",
    "Hakimpur",
    "Kaharol",
    "Khansama",
    "Nawabganj",
    "Parbatipur",
    "Dinajpur Sadar"
  ],
  "Gaibandha": [
    "Phulchhari",
    "Gaibandha Sadar",
    "Gobindaganj",
    "Palashbari",
    "Sadullapur",
    "Saghata",
    "Sundarganj"
  ],
  "Kurigram": [
    "Phulbari",
    "Bhurungamari",
    "Char Rajibpur",
    "Chilmari",
    "Kurigram Sadar",
    "Nageshwari",
    "Rajarhat",
    "Roumari",
    "Ulipur"
  ],
  "Lalmonirhat": [
    "Aditmari",
    "Hatibandha",
    "Kaliganj",
    "Lalmonirhat Sadar",
    "Patgram"
  ],
  "Nilphamari": [
    "Domar",
    "Jaldhaka",
    "Kishoreganj",
    "Nilphamari Sadar",
    "Saidpur",
    "Dimla"
  ],
  "Panchagarh": [
    "Atwari",
    "Boda",
    "Debiganj",
    "Panchagarh Sadar",
    "Tetulia"
  ],
  "Rangpur": [
    "Badarganj",
    "Kaunia",
    "Rangpur Sadar",
    "Mithapukur",
    "Pirgachha",
    "Pirganj",
    "Taraganj",
    "Gangachara"
  ],
  "Thakurgaon": [
    "Pirganj",
    "Baliadangi",
    "Haripur",
    "Ranisankail",
    "Thakurgaon Sadar",
    "Bhulli",
    "Ruhia"
  ],
  "Jamalpur": [
    "Baksiganj",
    "Dewanganj",
    "Islampur",
    "Jamalpur Sadar",
    "Madarganj",
    "Melandaha",
    "Sarishabari"
  ],
  "Mymensingh": [
    "Bhaluka",
    "Dhobaura",
    "Fulbaria",
    "Gafargaon",
    "Gouripur",
    "Haluaghat",
    "Ishwarganj",
    "Mymensingh Sadar",
    "Muktagachha",
    "Nandail",
    "Phulpur",
    "Tarakanda",
    "Trishal"
  ],
  "Netrokona": [
    "Atpara",
    "Barhatta",
    "Durgapur",
    "Khaliajuri",
    "Kalmakanda",
    "Kendua",
    "Madan",
    "Mohanganj",
    "Netrokona Sadar",
    "Purbadhala"
  ],
  "Sherpur": [
    "Jhenaigati",
    "Nakla",
    "Nalitabari",
    "Sherpur Sadar",
    "Sreebardi"
  ],
  "Barguna": [
    "Amtali",
    "Bamna",
    "Barguna Sadar",
    "Betagi",
    "Patharghata",
    "Taltali"
  ],
  "Barishal": [
    "Agailjhara",
    "Babuganj",
    "Bakerganj",
    "Banaripara",
    "Gournadi",
    "Hizla",
    "Barishal Sadar",
    "Mehendiganj",
    "Muladi",
    "Wazirpur"
  ],
  "Bhola": [
    "Bhola Sadar",
    "Borhanuddin",
    "Daulatkhan",
    "Lalmohan",
    "Monpura",
    "Tazumuddin",
    "Char Fasson"
  ],
  "Jhalokati": [
    "Jhalokati Sadar",
    "Nalchity",
    "Kathalia",
    "Rajapur"
  ],
  "Patuakhali": [
    "Bauphal",
    "Dashmina",
    "Dumki",
    "Kalapara",
    "Mirzaganj",
    "Patuakhali Sadar",
    "Rangabali",
    "Galachipa"
  ],
  "Pirojpur": [
    "Bhandaria",
    "Kawkhali",
    "Mathbaria",
    "Nazirpur",
    "Pirojpur Sadar",
    "Nesarabad",
    "Zianagar"
  ]
};
