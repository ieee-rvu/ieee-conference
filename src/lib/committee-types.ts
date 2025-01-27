export enum roles {
    ChiefPatron = 'Chief Patron',
    Patron = 'Patron',
    AdvisoryBoard = 'Advisory Board',
    HonoraryChair = 'Honorary Chair',
    ConfrenceChair = 'Confrence Chair',
    ProgramChair = 'Program Chair',
    TechnicalProgramChair = 'Technical Program Chair',
    TechnicalProgramMember = 'Technical Program Member',
    SponsorshipChair = 'Sponsorship Chair',
    PublicityMediaChair = 'Publicity and Media Chair',
    WebChair = 'Website and EasyChair Chairs',
    FinanceCommittee = 'Finance Committee',
    RegistrationCommittee = 'Registration Committee',
    SessionManagement = 'Session Management',
    HospitalityCommittee = 'Hospitality Committee',
    TransportationCommittee = 'Transportation Committee'
};

export interface CommitteeMember {
    designation: string;
    subDesignation?: string;
    name: string;
    qualifications: string[];
    role: (keyof typeof roles)[];
    image: string;
}

export const CommitteeMembers: CommitteeMember[] = [
    {
        designation: 'Dr.',
        name: 'M P Shyam',
        qualifications: ['President','RSST'],
        role: ['ChiefPatron'],
        image: '/committee/MP-Shyam.png'
    },
    {
        designation: 'Dr.',
        name: 'A V S Murthy',
        qualifications: ['Hon. Secretary', 'RSST'],
        role: ['Patron'],
        image: '/committee/AVS-Murthy.png'
    },
    {
        designation: 'Sri.',
        name: 'D P Nagaraj',
        qualifications: ['Hon. Joint Secretary', 'RSST'],
        role: ['Patron'],
        image: '/committee/D-P-Nagaraj.png'
    },
    {
        designation: 'Sri.',
        name: 'Venkatesh Babu',
        qualifications: ['Hon. Treasurer', 'RSST'],
        role: ['Patron'],
        image: '/committee/Venkatesh-Babu.png'
    },
    {
        designation: 'Prof.',
        subDesignation: 'Dr.',
        name: 'Sanjay Kumar',
        qualifications: ['Vice Chancellor'],
        role: ['AdvisoryBoard'],
        image: '/committee/Sanjay-Kumar.png'
    },
    {
        designation: 'Prof.',
        subDesignation: 'Dr.',
        name: 'Dwarika Uniyal',
        qualifications: ['Pro-Vice Chancellor'],
        role: ['AdvisoryBoard'],
        image: '/committee/Dwarika-Prasad.png'
    },
    {
        designation: 'Dr.',
        name: 'Sahana D. Gowda',
        qualifications: ['Registrar'],
        role: ['Patron'],
        image: '/committee/Sahana-Gowda.jpg'
    },
    {
        designation: 'Dr.',
        name: 'G Shobha',
        qualifications: ['Professor and Dean, CSE at RV University'],
        role: ['ConfrenceChair'],
        image: '/committee/G-Shobha.jpg'
    },
    {
        designation: 'Dr.',
        name: 'Merin Thomas',
        qualifications: ['Assistant Dean - IQAC, Minors Specialisations, & General Electives', 'Ph.D'],
        role: ['ProgramChair'],
        image: '/committee/Merin-Thomas.jpg'
    },
    {
        designation: 'Dr.',
        name: 'Manish Kumar',
        qualifications: ['Associate Professor MCA', 'M.Phil (Computer Science)', 'Post Graduate Diploma- Cyber Law', 'Ph.D (Computer Science)'],
        role: ['TechnicalProgramChair'],
        image: '/committee/Manish-Kumar.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Vaidyanathan Sivasubramanian',
        qualifications: ['Professor of Practice M.S. Software Systems', 'B.E. Computer Science & Engineering'],
        role: ['SponsorshipChair'],
        image: '/committee/Vaidyanathan-Sivasubramanian.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Balu Masti',
        qualifications: ['Adjunct Professor', 'School of Computer Science and Engineering MS in CSE, University of Nebraska-Lincoln'],
        role: ['SponsorshipChair'],
        image: '/committee/Balu-Masti.png'
    },
    {
        designation: 'Prof.',
        name: 'Chandramouleeswaran Sankaran',
        qualifications: ['Professor. B.E in Electronic and Communications from Thiagarajar College of Engineering, Madurai', 'MTech in Computer Science and Engineering, IIT Madras'],
        role: ['SponsorshipChair'],
        image: '/committee/Chandramouleeswaran-Sankaran.jpg'
    },
    {
        designation: 'Prof.',
        name: 'CVSN Reddy',
        qualifications: ['Professor at School of Computer Science and Engineering, RV University', 'Associate Professor of Computer Science at Hewlett Packard Enterprise'],
        role: ['SponsorshipChair'],
        image: '/committee/CVSN-Reddy.png'
    },
    {
        designation: 'Prof.',
        name: 'Rajeev B R',
        qualifications: ['Assistant Professor', 'MSc'],
        role: ['PublicityMediaChair'],
        image: '/committee/Rajeev-BR.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Chakravarthula S K Raju',
        qualifications: ['Assistant Professor', 'MSc(Applied Mathematics)', 'Ph.D.', 'Post Doc(Hanyang University, South Korea)'],
        role: ['PublicityMediaChair'],
        image: '/committee/Chakravarthula-S-K-Raju.jpg'
    },
    {
        designation: 'Dr.',
        name: 'Jobin Thomas',
        qualifications: ['Assistant Professor', 'BTech', 'MTech', 'Ph.D'],
        role: ['PublicityMediaChair'],
        image: '/committee/Jobin-Thomas.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Shoeb Ahmad',
        qualifications: ['Assistant Professor', 'BTech', 'MTech', 'Ph.D(Pursuing)'],
        role: ['PublicityMediaChair'],
        image: '/committee/Shoeb-Ahmad.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Sritama Banerjee',
        qualifications: ['Assistant Professor', 'MTech'],
        role: ['PublicityMediaChair'],
        image: '/committee/Sritama-Banerjee.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Aishwarya Singh Gautam',
        qualifications: ['Assistant Professor', 'MTech', 'Ph.D'],
        role: ['WebChair'],
        image: '/committee/Aishwarya-Singh-Gautam.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Anik Acharjee',
        qualifications: ['Assistant Professor', 'MCA'],
        role: ['WebChair'],
        image: '/committee/Anik-Acharjee.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Sheba Pari N',
        qualifications: ['Assistant Professor', 'BE', 'MTech', 'PhD'],
        role: ['WebChair'],
        image: '/committee/Sheba-Pari.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Aparna R',
        qualifications: ['Assistant Professor', 'MTech'],
        role: ['FinanceCommittee'],
        image: '/committee/Aparna-R.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Muralidhar Billa',
        qualifications: ['Assistant Professor', 'BE', 'Masters in Information systems(Australia)', 'MTech in DataScience', 'Pursuing PhD'],
        role: ['FinanceCommittee','SessionManagement'],
        image: '/committee/Muralidhar-Billa.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Uma Shankari',
        qualifications: ['Assistant Professor', 'MTech', 'Pursuing PhD'],
        role: ['FinanceCommittee'],
        image: '/committee/Uma-Shankari.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Kalpana Devi S',
        qualifications: ['Assistant Professor', 'BE', 'MTech', 'Pursuing PhD'],
        role: ['FinanceCommittee'],
        image: '/committee/Kalpana-Devi-S.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Sonam V Maju',
        qualifications: ['Assistant Professor', 'PhD(Pursuing)'],
        role: ['RegistrationCommittee'],
        image: '/committee/Sonam-V-Maju.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Shanti Konda',
        qualifications: ['Assistant Professor', 'BTech - Bioinformatics(AU)', 'MTech - Data Science'],
        role: ['RegistrationCommittee'],
        image: '/committee/Shanti-Konda.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Khushboo Pandey',
        qualifications: ['Assistant Professor', 'PhD(Pursuing)'],
        role: ['RegistrationCommittee'],
        image: '/committee/Khushboo-Pandey.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Durgarao Guttula',
        qualifications: ['Assistant Professor', 'PhD'],
        role: ['SessionManagement'],
        image: '/committee/Durgarao-Guttula.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Evlin',
        qualifications: ['Assistant Professor', 'BE', 'ME'],
        role: ['SessionManagement'],
        image: '/committee/Evlin-Vidyu-Latha-P.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Ashwini Kumar Mathur',
        qualifications: ['Assistant Professor', 'BTech', 'MTech'],
        role: ['SessionManagement'],
        image: '/committee/Ashwini-Kumar.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Veena S',
        qualifications: ['Assistant Professor', 'MTech', 'PhD(Pursuing)'],
        role: ['SessionManagement'],
        image: '/committee/Veena-S.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Chidhanand R S',
        qualifications: ['Assistant Professor', 'MTech', 'PhD'],
        role: ['HospitalityCommittee'],
        image: '/committee/Chidhananda-R-S.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Amruthesh Bhat',
        qualifications: ['Assistant Professor', 'MSc Applied Physics', 'Specialization in Solid state Physics'],
        role: ['HospitalityCommittee'],
        image: '/committee/Amruthesh-Bhat.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Sasikala J',
        qualifications: ['Assistant Professor', 'MSc', 'MPhil', 'PhD'],
        role: ['HospitalityCommittee'],
        image: '/committee/Sasikala-Jeganathan.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Suresh N',
        qualifications: ['Assistant Professor', 'MCA'],
        role: ['HospitalityCommittee'],
        image: '/committee/Suresh-N.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Harish K R',
        qualifications: ['Assistant Professor', 'MTech in Manufacturing Science and Engineering'],
        role: ['TransportationCommittee'],
        image: '/committee/Harish-K-R.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Madugundu Chiranjeevi',
        qualifications: ['Assistant Professor', 'Masters of Computer Applications', 'Specialization in Storage and Cloud Technology'],
        role: ['TransportationCommittee'],
        image: '/committee/Madugundu-Chiranjeevi.jpg'
    },
    {
        designation: 'Prof.',
        name: 'Ranjan Raj',
        qualifications: ['Assistant Professor', 'MTech'],
        role: ['TransportationCommittee'],
        image: '/committee/Ranjan-Raj.jpg'
    }
];
