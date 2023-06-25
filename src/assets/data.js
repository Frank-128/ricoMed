export const stats = [
    {
        department:'Emergency',
        patients:200

        
    },
    {
        department:'inpatient Units',
        patients:800

        
    },
    {
        department:'ICU',
        patients:20

        
    },
    {
        department:'Surgery',
        patients:120

        
    },
    {
        department:'Laboratory',
        patients:600

        
    },
    {
        department:'Pharmarcy',
        patients:1200

        
    },
    {
        department:'Radiology',
        patients:500

        
    }
]

export const patients = [
    {
        name:'Firdaus Khalid',
        id:1,
        type:'outpatient',
        doctor:'Farham Hassan',
        status:'pending',
        bill:[
            {
                department: 'Neonatology',
                service: 'Premature Infant Care',
                amount: 77000
            },
            {
                department: 'Radiation Oncology',
                service: 'Radiotherapy',
                amount: 89000
            },
            {
                department: 'Vascular Surgery',
                service: 'Varicose Vein Treatment',
                amount: 54000
            },
            {
                department: 'Infectious Diseases',
                service: 'HIV Testing',
                amount: 12000
            },
            {
                department: 'Nuclear Medicine',
                service: 'PET Scan',
                amount: 98000
            }
        ]
        
    },
    {
        name:'John Snow',
        id:2,
        type:'outpatient',
        doctor:'Farham Hassan',
        status:'discharged',
        bill:[
            {
                department: 'Plastic Surgery',
                service: 'Breast Augmentation',
                amount: 92000
            },
            {
                department: 'Physical Therapy',
                service: 'Sports Injury Rehabilitation',
                amount: 63000
            },
            {
                department: 'Geriatrics',
                service: 'Memory Assessment',
                amount: 18000
            },
            {
                department: 'Dietetics',
                service: 'Nutrition Consultation',
                amount: 15000
            },
            {
                department: 'Anesthesiology',
                service: 'Anesthesia Administration',
                amount: 40000
            }
        ]
        
    },
    {
        name:'Amina Hussein',
        id:3,
        type:'outpatient',
        doctor:'Farham Hassan',
        status:'attended',
        bill:[
            {
                department: 'Nephrology',
                service: 'Kidney Transplant',
                amount: 95000
            },
            {
                department: 'Rheumatology',
                service: 'Joint Injections',
                amount: 22000
            },
            {
                department: 'Hematology',
                service: 'Bone Marrow Biopsy',
                amount: 42000
            },
            {
                department: 'Dentistry',
                service: 'Root Canal Treatment',
                amount: 38000
            },
            {
                department: 'Allergy and Immunology',
                service: 'Allergy Testing',
                amount: 54000
            }
        ]
        
    },
    {
        name:'Juliana Michaels',
        id:5,
        type:'outpatient',
        doctor:'Farham Hassan',
        status:'discharged',
        bill:[
            {
                department: 'Urology',
                service: 'Prostate Exam',
                amount: 27000
            },
            {
                department: 'Pulmonology',
                service: 'Lung Function Test',
                amount: 68000
            },
            {
                department: 'Endocrinology',
                service: 'Hormone Level Testing',
                amount: 50000
            },
            {
                department: 'Oncology',
                service: 'Chemotherapy',
                amount: 80000
            },
            {
                department: 'Gastroenterology',
                service: 'Colonoscopy',
                amount: 73000
            }
        ]
        
    },
    {
        name:'Aurelia Holland',
        id:6,
        type:'inpatient',
        doctor:'Farham Hassan',
        status:'pending',
        ward:12,
        startDate:'12-04-2023',
        endDate:'25-05-023',
        bill:[
            {
                department: 'Orthopedics',
                service: 'Fracture Treatment',
                amount: 58000
            },
            {
                department: 'Gynecology',
                service: 'Pap Smear',
                amount: 18000
            },
            {
                department: 'Ophthalmology',
                service: 'Cataract Surgery',
                amount: 95000
            },
            {
                department: 'ENT (Otolaryngology)',
                service: 'Tonsillectomy',
                amount: 42000
            },
            {
                department: 'Psychiatry',
                service: 'Therapy Session',
                amount: 30000
            }
        ]
        
    },
    {
        name:'Jim Beglin',
        id:7,
        type:'inpatient',
        doctor:'Fuego Ings',
        status:'attended',
        ward:12,
        startDate:'12-04-2023',
        endDate:'25-05-023',
        bill:[
            {
                department: 'Cardiology',
                service: 'Echocardiogram',
                amount: 75000
            },
            {
                department: 'General Surgery',
                service: 'Appendectomy',
                amount: 60000
            },
            {
                department: 'Dermatology',
                service: 'Skin Biopsy',
                amount: 35000
            },
            {
                department: 'Neurology',
                service: 'MRI Scan',
                amount: 90000
            },
            {
                department: 'Pediatrics',
                service: 'Vaccinations',
                amount: 20000
            }
        ]
    },
    {
        name:'Kim Nado',
        id:8,
        type:'inpatient',
        doctor:'Seleman Nazir',
        status:'pending',
        ward:12,
        startDate:'12-04-2023',
        endDate:'25-05-023',
        bill:[
            {
                department:'Radiology',
                service:'x-ray',
                amount:24000
            },
            {
                department:'General Doctor',
                service:'counselling',
                amount:10000
            },
            {
                department:'Laboratory',
                service:'urine, stool and blood test',
                amount:70000
            },
            {
                department:'Emergency',
                service:'dressing',
                amount:5000
            },
            {
                department:'Pharmarcy',
                service:'medications',
                amount:120000
            }
        ]
    }
]