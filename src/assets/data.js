import moment from "moment";

export const stats = [
  {
    department: "Emergency",
    patients: 200,
  },
  {
    department: "inpatient Units",
    patients: 800,
  },
  {
    department: "ICU",
    patients: 20,
  },
  {
    department: "Surgery",
    patients: 120,
  },
  {
    department: "Laboratory",
    patients: 600,
  },
  {
    department: "Pharmarcy",
    patients: 1200,
  },
  {
    department: "Radiology",
    patients: 500,
  },
];

export const patients = [
  {
    name: "Firdaus Khalid",
    id: 1,
    type: "outpatient",
    doctor: "Farham Hassan",
    status: "pending",
    bill: [
      {
        department: "Neonatology",
        service: "Premature Infant Care",
        amount: 77000,
      },
      {
        department: "Radiation Oncology",
        service: "Radiotherapy",
        amount: 89000,
      },
      {
        department: "Vascular Surgery",
        service: "Varicose Vein Treatment",
        amount: 54000,
      },
      {
        department: "Infectious Diseases",
        service: "HIV Testing",
        amount: 12000,
      },
      {
        department: "Nuclear Medicine",
        service: "PET Scan",
        amount: 98000,
      },
    ],
  },
  {
    name: "John Snow",
    id: 2,
    type: "outpatient",
    doctor: "Farham Hassan",
    status: "discharged",
    bill: [
      {
        department: "Plastic Surgery",
        service: "Breast Augmentation",
        amount: 92000,
      },
      {
        department: "Physical Therapy",
        service: "Sports Injury Rehabilitation",
        amount: 63000,
      },
      {
        department: "Geriatrics",
        service: "Memory Assessment",
        amount: 18000,
      },
      {
        department: "Dietetics",
        service: "Nutrition Consultation",
        amount: 15000,
      },
      {
        department: "Anesthesiology",
        service: "Anesthesia Administration",
        amount: 40000,
      },
    ],
  },
  {
    name: "Amina Hussein",
    id: 3,
    type: "outpatient",
    doctor: "Farham Hassan",
    status: "attended",
    bill: [
      {
        department: "Nephrology",
        service: "Kidney Transplant",
        amount: 95000,
      },
      {
        department: "Rheumatology",
        service: "Joint Injections",
        amount: 22000,
      },
      {
        department: "Hematology",
        service: "Bone Marrow Biopsy",
        amount: 42000,
      },
      {
        department: "Dentistry",
        service: "Root Canal Treatment",
        amount: 38000,
      },
      {
        department: "Allergy and Immunology",
        service: "Allergy Testing",
        amount: 54000,
      },
    ],
  },
  {
    name: "Juliana Michaels",
    id: 4,
    type: "outpatient",
    doctor: "Farham Hassan",
    status: "discharged",
    bill: [
      {
        department: "Urology",
        service: "Prostate Exam",
        amount: 27000,
      },
      {
        department: "Pulmonology",
        service: "Lung Function Test",
        amount: 68000,
      },
      {
        department: "Endocrinology",
        service: "Hormone Level Testing",
        amount: 50000,
      },
      {
        department: "Oncology",
        service: "Chemotherapy",
        amount: 80000,
      },
      {
        department: "Gastroenterology",
        service: "Colonoscopy",
        amount: 73000,
      },
    ],
  },
  {
    name: "Aurelia Holland",
    id: 5,
    type: "inpatient",
    doctor: "Farham Hassan",
    status: "pending",
    ward: 12,
    startDate: "12-04-2023",
    endDate: "25-05-023",
    bill: [
      {
        department: "Orthopedics",
        service: "Fracture Treatment",
        amount: 58000,
      },
      {
        department: "Gynecology",
        service: "Pap Smear",
        amount: 18000,
      },
      {
        department: "Ophthalmology",
        service: "Cataract Surgery",
        amount: 95000,
      },
      {
        department: "ENT (Otolaryngology)",
        service: "Tonsillectomy",
        amount: 42000,
      },
      {
        department: "Psychiatry",
        service: "Therapy Session",
        amount: 30000,
      },
    ],
  },
  {
    name: "Jim Beglin",
    id: 6,
    type: "inpatient",
    doctor: "Fuego Ings",
    status: "attended",
    ward: 12,
    startDate: "12-04-2023",
    endDate: "25-05-023",
    bill: [
      {
        department: "Cardiology",
        service: "Echocardiogram",
        amount: 75000,
      },
      {
        department: "General Surgery",
        service: "Appendectomy",
        amount: 60000,
      },
      {
        department: "Dermatology",
        service: "Skin Biopsy",
        amount: 35000,
      },
      {
        department: "Neurology",
        service: "MRI Scan",
        amount: 90000,
      },
      {
        department: "Pediatrics",
        service: "Vaccinations",
        amount: 20000,
      },
    ],
  },
  {
    name: "Kim Nado",
    id: 7,
    type: "inpatient",
    doctor: "Seleman Nazir",
    status: "pending",
    ward: 12,
    startDate: "12-04-2023",
    endDate: "25-05-023",
    bill: [
      {
        department: "Radiology",
        service: "x-ray",
        amount: 24000,
      },
      {
        department: "General Doctor",
        service: "counselling",
        amount: 10000,
      },
      {
        department: "Laboratory",
        service: "urine, stool and blood test",
        amount: 70000,
      },
      {
        department: "Emergency",
        service: "dressing",
        amount: 5000,
      },
      {
        department: "Pharmarcy",
        service: "medications",
        amount: 120000,
      },
    ],
  },
];

export const users = [
  {
    id: 1,
    name: "Reece Taylor",
    pic: "/swift.jpeg",
    department: "outpatient",
    role: "nurse",
    status:true,
    createdAt:"2023-11-2 12:11:1"
  },
  {
    id: 2,
    name: "Olivia Baker",
    department: "reception",
    pic: "/olivia.webp",
    role: "reception",
    status:false,
    createdAt:"2023-11-2 12:11:1"
  },
  {
    id: 3,
    name: "Joel Freeman",
    department: "outpatient",
    pic: "/ghost.webp",
    role: "doctor",
    status:false,
    createdAt:"2023-11-2 12:11:1"
  },
  {
    id: 4,
    name: "Kendrick Joe",
    department: "inpatient",
    pic: "/kendrick.jpeg",
    role: "doctor",
    status:true,
    createdAt:"2023-11-2 12:11:1"
  },

  {
    id: 5,
    name: "Rico Hernandes",
    department: "general ",
    pic: "/kendrick.jpeg",
    role: "admin",
    status:true,
    createdAt:"2023-11-2 12:11:1"
  },
  {
    id: 6,
    name: "Cane Andrews",
    department: "pharmarcy",
    pic: "/kendrick.jpeg",
    role: "pharmacy",
    status:false,
    createdAt:"2023-11-2 12:11:1"
  },
];

export const events = [
  {
    id: 1,
    userId: 3,
    title: "Rico Appointment",
    start: moment().hour(11).minute(50)._d,
    end: moment().hour(12).minute(20)._d,
  },
  {
    id: 2,
    userId: 3,
    title: "Ideal Appointment",
    start: moment().hour(10).minute(0)._d,
    end: moment().hour(11).minute(40)._d,
  },

  {
    id: 1,
    userId: 1,
    title: "Patient Appointment",
    start: moment().hour(8).minute(0)._d,
    end: moment().hour(8).minute(20)._d,
  },
  {
    id: 1,
    userId: 1,
    title: "Lunch Appointment",
    start: moment().hour(14).minute(0)._d,
    end: moment().hour(15).minute(0)._d,
  },
  {
    id: 1,
    userId: 1,
    title: "Lawyer Meeting",
    start: new Date(2023, 6, 3, 13, 50, 0),
    end: new Date(2023, 6, 3, 14, 50, 0),
  },
  {
    id: 1,
    userId: 1,
    title: "Lawyer Meeting",
    start: new Date(2023, 6, 4, 13, 50, 0),
    end: new Date(2023, 6, 4, 14, 50, 0),
  },
];
export const conversations = [
  {
    sender: 2,
    receiver: 1,
    message: "Hi, how are you?",
    timeSent: "2023-06-01T08:30:00",
  },
  {
    sender: 1,
    receiver: 2,
    message: "Hey there, I'm good! How about you?",
    timeSent: "2023-06-01T08:35:00",
  },
  {
    sender: 3,
    receiver: 2,
    message: "Hello! What's up?",
    timeSent: "2023-06-01T08:40:00",
  },
  {
    sender: 2,
    receiver: 3,
    message: "Not much, just chilling. You?",
    timeSent: "2023-06-01T08:45:00",
  },
  {
    sender: 4,
    receiver: 3,
    message: "Hey, nice to meet you!",
    timeSent: "2023-06-01T09:00:00",
  },
  {
    sender: 3,
    receiver: 4,
    message: "Likewise! How's your day?",
    timeSent: "2023-06-01T09:05:00",
  },
  {
    sender: 1,
    receiver: 4,
    message: "Good morning! How's everything?",
    timeSent: "2023-06-01T09:10:00",
  },
  {
    sender: 4,
    receiver: 1,
    message: "Good morning! It's going great, thanks!",
    timeSent: "2023-06-01T09:15:00",
  },
  {
    sender: 2,
    receiver: 4,
    message: "Greetings! How have you been?",
    timeSent: "2023-06-01T09:20:00",
  },
  {
    sender: 4,
    receiver: 2,
    message: "Hey, what are you up to?",
    timeSent: "2023-06-01T09:25:00",
  },
  {
    sender: 3,
    receiver: 1,
    message: "Not much, just working. How about you?",
    timeSent: "2023-06-01T09:30:00",
  },
  {
    sender: 1,
    receiver: 3,
    message: "Just hanging out. Enjoying the weekend!",
    timeSent: "2023-06-01T09:35:00",
  },
  {
    sender: 4,
    receiver: 3,
    message: "Hello! Long time no see.",
    timeSent: "2023-06-01T09:40:00",
  },
  {
    sender: 3,
    receiver: 4,
    message: "Hi there! How's everything?",
    timeSent: "2023-06-01T09:45:00",
  },
  {
    sender: 2,
    receiver: 4,
    message: "Hey! Are you busy right now?",
    timeSent: "2023-06-01T09:50:00",
  },
  {
    sender: 4,
    receiver: 2,
    message: "Not really, just taking a break. What's up?",
    timeSent: "2023-06-01T09:55:00",
  },
  {
    sender: 1,
    receiver: 2,
    message: "Hi, how's your day going?",
    timeSent: "2023-06-01T10:00:00",
  },
  {
    sender: 2,
    receiver: 1,
    message: "It's going well! Just got back from the gym.",
    timeSent: "2023-06-01T10:05:00",
  },
  {
    sender: 3,
    receiver: 1,
    message: "Hey, how was your weekend?",
    timeSent: "2023-06-01T10:10:00",
  },
  {
    sender: 1,
    receiver: 3,
    message: "Weekend was great! Spent time with family.",
    timeSent: "2023-06-01T10:15:00",
  },
  {
    sender: 4,
    receiver: 2,
    message: "Hello! Wanna grab a coffee later?",
    timeSent: "2023-06-01T10:20:00",
  },
  {
    sender: 2,
    receiver: 4,
    message: "Sure! Coffee sounds good. Let's meet at our usual spot.",
    timeSent: "2023-06-01T10:25:00",
  },
  {
    sender: 1,
    receiver: 4,
    message: "Hey there, what's new with you?",
    timeSent: "2023-06-01T10:30:00",
  },
  {
    sender: 4,
    receiver: 1,
    message: "Not much, just catching up with friends. How about you?",
    timeSent: "2023-06-01T10:35:00",
  },
  {
    sender: 3,
    receiver: 2,
    message: "Greetings! Long time no talk.",
    timeSent: "2023-06-01T10:40:00",
  },
  {
    sender: 2,
    receiver: 3,
    message: "Hey! Yeah, it's been a while. How have you been?",
    timeSent: "2023-06-01T10:45:00",
  },
  {
    sender: 4,
    receiver: 1,
    message: "Hello! Remember our last trip?",
    timeSent: "2023-06-01T10:50:00",
  },
  {
    sender: 1,
    receiver: 4,
    message: "Of course! That was such a fun trip. We should plan another one.",
    timeSent: "2023-06-01T10:55:00",
  },
  {
    sender: 2,
    receiver: 1,
    message: "Hi, let's catch up soon!",
    timeSent: "2023-06-01T11:00:00",
  },
  {
    sender: 1,
    receiver: 2,
    message: "Definitely! We should plan a lunch or dinner soon.",
    timeSent: "2023-06-01T11:05:00",
  },
  {
    sender: 4,
    receiver: 3,
    message: "Good evening! How was your day?",
    timeSent: "2023-06-01T11:10:00",
  },
  {
    sender: 3,
    receiver: 4,
    message: "Good evening! It was busy but productive. How about yours?",
    timeSent: "2023-06-01T11:15:00",
  },
  {
    sender: 1,
    receiver: 3,
    message: "It's been a long day, but I'm glad it's almost over.",
    timeSent: "2023-06-01T11:20:00",
  },
  {
    sender: 3,
    receiver: 1,
    message:
      "I understand that feeling. Hang in there, the weekend is almost here!",
    timeSent: "2023-06-01T11:25:00",
  },
  {
    sender: 2,
    receiver: 4,
    message: "Hey, are you free tomorrow evening?",
    timeSent: "2023-06-01T11:30:00",
  },
  {
    sender: 4,
    receiver: 2,
    message: "I have some plans, but I should be free after 7 PM. Why?",
    timeSent: "2023-06-01T11:35:00",
  },
  {
    sender: 1,
    receiver: 2,
    message:
      "Hey, I just saw a movie that you might like. Let's go watch it together.",
    timeSent: "2023-06-01T11:40:00",
  },
  {
    sender: 2,
    receiver: 1,
    message: "Sounds great! Which movie is it?",
    timeSent: "2023-06-01T11:45:00",
  },
  {
    sender: 3,
    receiver: 1,
    message: "Hello! How's your week going so far?",
    timeSent: "2023-06-01T11:50:00",
  },
  {
    sender: 1,
    receiver: 3,
    message:
      "Hey! It's been a busy week, but overall it's going well. What about you?",
    timeSent: "2023-06-01T11:55:00",
  },
  {
    sender: 4,
    receiver: 3,
    message: "Hi, any plans for the weekend?",
    timeSent: "2023-06-01T12:00:00",
  },
  {
    sender: 3,
    receiver: 4,
    message:
      "Not sure yet. Maybe going hiking or visiting some friends. What about you?",
    timeSent: "2023-06-01T12:05:00",
  },
  {
    sender: 2,
    receiver: 4,
    message: "Hello! How's the weather today?",
    timeSent: "2023-06-01T12:10:00",
  },
  {
    sender: 4,
    receiver: 2,
    message:
      "Hey! It's sunny and warm. Perfect weather for outdoor activities.",
    timeSent: "2023-06-01T12:15:00",
  },
  {
    sender: 1,
    receiver: 2,
    message: "Hey there, do you have any restaurant recommendations?",
    timeSent: "2023-06-01T12:20:00",
  },
  {
    sender: 2,
    receiver: 1,
    message: "Sure! What type of cuisine are you in the mood for?",
    timeSent: "2023-06-01T12:25:00",
  },
  {
    sender: 3,
    receiver: 4,
    message: "Hi there, long time no see. How have you been?",
    timeSent: "2023-06-01T12:30:00",
  },
  {
    sender: 4,
    receiver: 3,
    message: "Hello! I've been good, thanks for asking. How about you?",
    timeSent: "2023-06-01T12:35:00",
  },
  {
    sender: 1,
    receiver: 3,
    message: "Good afternoon! Any plans for the weekend?",
    timeSent: "2023-06-01T12:40:00",
  },
  {
    sender: 3,
    receiver: 1,
    message: "Afternoon! I'm thinking of going to the beach. What about you?",
    timeSent: "2023-06-01T12:45:00",
  },
  {
    sender: 2,
    receiver: 4,
    message: "Hi! Did you watch the latest episode of that series?",
    timeSent: "2023-06-01T12:50:00",
  },
  {
    sender: 4,
    receiver: 2,
    message: "Hey! Yes, it was amazing. Can't wait for the next one.",
    timeSent: "2023-06-01T12:55:00",
  },
  {
    sender: 1,
    receiver: 2,
    message: "Hey, do you know any good bookstores in the city?",
    timeSent: "2023-06-01T13:00:00",
  },
  {
    sender: 2,
    receiver: 1,
    message:
      "Definitely! There's a great bookstore downtown. I can give you the address.",
    timeSent: "2023-06-01T13:05:00",
  },
  {
    sender: 4,
    receiver: 3,
    message: "Hi! How was your day?",
    timeSent: "2023-06-01T13:10:00",
  },
  {
    sender: 3,
    receiver: 4,
    message: "Hi! It was a productive day. How about yours?",
    timeSent: "2023-06-01T13:15:00",
  },
  {
    sender: 1,
    receiver: 3,
    message: "Hey, let's plan a hiking trip next month.",
    timeSent: "2023-06-01T13:20:00",
  },
  {
    sender: 3,
    receiver: 1,
    message: "Sure, I'm up for it! Let's discuss the details later.",
    timeSent: "2023-06-01T13:25:00",
  },
  {
    sender: 2,
    receiver: 4,
    message:
      "Hello! I heard there's a new art exhibition opening this weekend.",
    timeSent: "2023-06-01T13:30:00",
  },
  {
    sender: 4,
    receiver: 2,
    message:
      "That sounds interesting! I'm always up for exploring art. Let's go together.",
    timeSent: "2023-06-01T13:35:00",
  },
  {
    sender: 1,
    receiver: 2,
    message: "Hi there, any plans for tonight?",
    timeSent: "2023-06-01T13:40:00",
  },
  {
    sender: 2,
    receiver: 1,
    message: "Not yet. I'm open to suggestions. What do you have in mind?",
    timeSent: "2023-06-01T13:45:00",
  },
  {
    sender: 3,
    receiver: 4,
    message: "Hello! How's your week going so far?",
    timeSent: "2023-06-01T13:50:00",
  },
  {
    sender: 4,
    receiver: 3,
    message: "Hello! It's been busy but good. How about you?",
    timeSent: "2023-06-01T13:55:00",
  },
];

export const groupConv = [
  {
    id: 1,
    group: "doctors",
    message: "Hello guys this is the doctors group",
  },
  {
    id: 2,
    group: "nurses",
    message: "Hello guys this is the nurses group",
  },
  {
    id: 3,
    group: "pharmarcy",
    message: "Hello guys this is the pharmarcy group",
  },
  {
    id: 4,
    group: "laboratory",
    message: "Hello guys this is the laboratory group",
  },
  {
    id: 5,
    group: "reception",
    message: "Hello guys this is the reception group",
  },
];

export const logs = [
  {
    id: 1,
    action: "Patient admission",
    timestamp: "2023-07-07 10:30",
  },
  {
    id: 2,
    action: "Lab test request",
    timestamp: "2023-07-07 11:45",
  },
  {
    id: 3,
    action: "Doctor consultation",
    timestamp: "2023-07-07 13:15",
  },
  {
    id: 4,
    action: "Prescription update",
    timestamp: "2023-07-07 14:20",
  },
  {
    id: 5,
    action: "Surgery scheduling",
    timestamp: "2023-07-07 15:50",
  },
  {
    id: 1,
    action: "Billing",
    timestamp: "2023-07-08 09:15",
  },
  {
    id: 2,
    action: "Patient discharge",
    timestamp: "2023-07-08 11:30",
  },
  {
    id: 3,
    action: "Medication administration",
    timestamp: "2023-07-08 12:45",
  },
  {
    id: 4,
    action: "Patient transfer",
    timestamp: "2023-07-08 14:00",
  },
  {
    id: 5,
    action: "Emergency response",
    timestamp: "2023-07-08 15:20",
  },
  {
    id: 1,
    action: "Medical records update",
    timestamp: "2023-07-09 10:00",
  },
  {
    id: 2,
    action: "Appointment scheduling",
    timestamp: "2023-07-09 11:45",
  },
  {
    id: 3,
    action: "Radiology imaging",
    timestamp: "2023-07-09 13:30",
  },
  {
    id: 4,
    action: "Staff shift handover",
    timestamp: "2023-07-09 15:10",
  },
  {
    id: 5,
    action: "Medical equipment maintenance",
    timestamp: "2023-07-09 16:40",
  },
  {
    id: 1,
    action: "Inventory restocking",
    timestamp: "2023-07-10 09:30",
  },
  {
    id: 2,
    action: "Health checkup",
    timestamp: "2023-07-10 11:15",
  },
  {
    id: 3,
    action: "Nurse rounds",
    timestamp: "2023-07-10 13:00",
  },
  {
    id: 4,
    action: "Health education session",
    timestamp: "2023-07-10 14:45",
  },
  {
    id: 5,
    action: "Incident reporting",
    timestamp: "2023-07-10 16:20",
  },
];

export const pharmarcyOrders = [
  {
    id:1,
    patientId: 1,
    requirements: ["paracetamol", "Drip", "supplements"],
    doctorId: 4,
  },

  {
    id:2,
    patientId: 2,
    requirements: [
      "Antacid",
      "Cough Syrup",
      "Aspirin",
      "Ibuprofen",
      "Paracetamol",
    ],
    doctorId: 1,
  },
  {
    id:3,
    patientId: 3,
    requirements: ["Aspirin", "Ibuprofen"],
    doctorId: 2,
  },
  {
    id:4,
    patientId: 4,
    requirements: ["Antibiotic", "Cough Syrup", "Antacid"],
    doctorId: 3,
  },
  {
    id:5,
    patientId: 5,
    requirements: ["Paracetamol", "Antibiotic", "Cough Syrup", "Aspirin"],
    doctorId: 4,
  },
  {
    id:6,
    patientId: 6,
    requirements: ["Aspirin", "Antibiotic", "Ibuprofen", "Paracetamol"],
    doctorId: 4,
  },
  {
    id:7,
    patientId: 7,
    requirements: ["Paracetamol", "Aspirin", "Ibuprofen"],
    doctorId: 2,
  },

  
];


export const services = [
  {
    title:"Inpatient service",
    image:"/nurse1.webp",
    message:"We at RicoMed provide the best Inpatient service we provide good care to our inpatient and our charges and costs are friendly"

  },
  {
    title:"Consultation service",
    image:"/nurse2.avif",
    message:"We at RicoMed provide the best Consultation service, our consultation and counselling experts are higly trained and they provide the best solution for you"

  },
  {
    title:"Patient care",
    image:"/nurse3.jpg",
    message:"At RicoMed our primary motto is providing the best patient care, every staff at RicoMed is highly motivated and inspired to provide the best health care for both children,youth and the eldery"

  },
  {
    title:"Patient diagnosis",
    image:"/doctor2.jpg",
    message:"RicoMed has the best facilities which aid in the diagnosis process of the patients, thus at RicoMed we have a wide scope of diagnosing due to the best facilities we have"

  }
]