export const staticDatabase = {
  business: [
    {
      name: 'Enterprise LawConnect AI Core',
      price: 'Custom',
      problem:
        'Commercial legal practices lose billing velocity due to legacy, unindexed client document structures.',
      stack: ['React.js', 'Flask Array', 'PostgreSQL', 'RAG Engine'],
      url: 'lawconnect-corp',
    },
    {
      name: 'Asymmetric SaaS Billing Router',
      price: 'Custom',
      problem: 'Rigid transaction engines introduce failure overheads during simultaneous tier mutations.',
      stack: ['NextJS', 'FastAPI', 'Redis Nodes', 'Stripe API'],
      url: 'billing-core',
    },
  ],
  community: [
    {
      name: 'WaterWatch Public Quality Streamer',
      price: 'OpenSource',
      problem:
        'Regional sub-clusters lack unified alerting pathways to track water contamination parameters safely.',
      stack: ['React.js', 'Tailwind CSS', 'WebSockets', 'InfluxDB'],
      url: 'waterwatch-map',
    },
    {
      name: 'AgroCare Cooperative Crop Diagnostic Node',
      price: 'OpenSource',
      problem: 'Isolated smallholder agricultural sectors suffer yield drops from untracked migratory path vectors.',
      stack: ['Python', 'CNN Classification', 'Flask Framework', 'SQLite'],
      url: 'agrocare-public',
    },
  ],
}

export const collegeDatabase = {
  fullstack: [
    {
      name: 'Multi-Tenant Legal Brief Tracking Interface',
      price: '₹3,499',
      problem: 'Legacy law institutions experience critical processing friction due to unmonitored tracking pathways.',
      stack: ['React.js', 'Flask Server', 'PostgreSQL', 'JWT Tokens'],
      url: 'fs-legal',
      buyUrl: 'https://bnsone.gumroad.com/l/fs-legal',
    },
    {
      name: 'Medical Inventory Control Matrix',
      price: '₹2,999',
      problem: 'Sluggish critical asset logs cause inventory batch decay and stock collision errors in clinics.',
      stack: ['React.js', 'Flask Core', 'SQLite', 'Tailwind CSS'],
      url: 'fs-medical',
      buyUrl: 'https://bnsone.gumroad.com/l/fs-medical',
    },
    {
      name: 'B2B Supply Chain Broker Ledger',
      price: '₹3,899',
      problem: 'Asynchronous data writes crash database operations during concurrent order bursts.',
      stack: ['NextJS', 'NodeJS', 'PostgreSQL', 'Redis Cache'],
      url: 'fs-supply',
      buyUrl: 'https://bnsone.gumroad.com/l/fs-supply',
    },
  ],
  aiml: [
    {
      name: 'AgroCare Neural Pathology Classifier',
      price: '₹3,999',
      problem: 'Manual crop assessment stymies timely leaf diagnosis, triggering structural field decay paths.',
      stack: ['Python 3.10', 'TensorFlow/CNN', 'Flask API', 'OpenCV Core'],
      url: 'ai-agro',
      buyUrl: 'https://bnsone.gumroad.com/l/ai-agro',
    },
    {
      name: 'Brain Tumor Medical Image Segmenter',
      price: '₹3,899',
      problem: 'Visual tumor evaluation in dense scans suffers boundary blur, degrading clinical tracing safety.',
      stack: ['PyTorch Core', 'U-Net Node', 'Flask Server', 'NumPy Matrix'],
      url: 'ai-brain',
      buyUrl: 'https://bnsone.gumroad.com/l/ai-brain',
    },
  ],
  datascience: [
    {
      name: 'WaterWatch Core Quality Analytics Matrix',
      price: '₹3,499',
      problem: 'Unsorted pollution telemetry tables obscure real-time trend visualization routes.',
      stack: ['Pandas Library', 'Scikit-Learn', 'Matplotlib', 'NumPy Engine'],
      url: 'ds-water',
      buyUrl: 'https://bnsone.gumroad.com/l/ds-water',
    },
  ],
  cybersecurity: [
    {
      name: 'Asymmetric RBAC Token Perimeter Shield',
      price: '₹3,999',
      problem: 'Flawed application boundaries allow parameter tampering to leak administrative keys.',
      stack: ['FastAPI Node', 'PyJWT Core', 'Redis Cache Node', 'SQLAlchemy'],
      url: 'sec-token',
      buyUrl: 'https://bnsone.gumroad.com/l/sec-token',
    },
  ],
  iot: [
    {
      name: 'Real-Time Mesh Node Asynchronous Ingester',
      price: '₹3,999',
      problem: 'High-frequency telemetry data streams crash typical web endpoints, causing packet dropouts.',
      stack: ['NodeJS Server', 'MQTT Sockets', 'InfluxDB Node', 'C++ Microcode'],
      url: 'iot-mesh',
      buyUrl: 'https://bnsone.gumroad.com/l/iot-mesh',
    },
  ],
  cbasics: [
    {
      name: 'Library Management System',
      price: '₹499',
      problem: 'First-year lab submissions need a clean, file-based CRUD system without a database dependency.',
      stack: ['C', 'File I/O', 'Structs'],
      url: 'c-library-mgmt',
      buyUrl: 'https://bnsone.gumroad.com/l/c-library-mgmt',
    },
    {
      name: 'Student Record Management',
      price: '₹599',
      problem: 'Demonstrates OOP fundamentals — classes, constructors, and file persistence — for a syllabus record-keeping assignment.',
      stack: ['C++', 'OOP', 'File Handling'],
      url: 'cpp-student-records',
      buyUrl: 'https://bnsone.gumroad.com/l/cpp-student-records',
    },
    {
      name: 'Bank Account Management System',
      price: '₹549',
      problem: 'Menu-driven console app covering structs, arrays, and basic transaction logic for a core-C submission.',
      stack: ['C', 'Structs', 'Arrays'],
      url: 'c-bank-mgmt',
      buyUrl: 'https://bnsone.gumroad.com/l/c-bank-mgmt',
    },
    {
      name: 'Console Snake Game',
      price: '₹699',
      problem: 'A pointers-and-recursion-driven console game, built to satisfy a "mini project with logic depth" requirement.',
      stack: ['C++', 'Pointers', 'Recursion'],
      url: 'cpp-snake-game',
      buyUrl: 'https://bnsone.gumroad.com/l/cpp-snake-game',
    },
  ],
}

for (let i = 2; i <= 6; i++) {
  const dsUrl = `ds-node-0${i}`
  collegeDatabase.datascience.push({
    name: `Data Analysis Node Model _0${i}`,
    price: `₹${3000 + ((i * 65) % 900)}`,
    problem: 'Fragmented historical metrics lose predictive visibility under typical analytic schemas.',
    stack: ['Pandas', 'Scikit-Learn', 'Matplotlib'],
    url: dsUrl,
    buyUrl: `https://bnsone.gumroad.com/l/${dsUrl}`,
  })

  const secUrl = `sec-node-0${i}`
  collegeDatabase.cybersecurity.push({
    name: `Hardened Security Verification Module _0${i}`,
    price: `₹${2999 + ((i * 70) % 999)}`,
    problem: 'Unsanitized form inputs allow malicious exploitation parameters to scan data roots.',
    stack: ['FastAPI', 'PyJWT', 'PostgreSQL'],
    url: secUrl,
    buyUrl: `https://bnsone.gumroad.com/l/${secUrl}`,
  })

  const iotUrl = `iot-node-0${i}`
  collegeDatabase.iot.push({
    name: `Asynchronous Sensor Matrix Client _0${i}`,
    price: `₹${3100 + ((i * 55) % 880)}`,
    problem: 'Delayed sensor notifications fail to map operational failures across hardware arrays.',
    stack: ['NodeJS', 'MQTT Protocol', 'InfluxDB Core'],
    url: iotUrl,
    buyUrl: `https://bnsone.gumroad.com/l/${iotUrl}`,
  })
}

export const collegeDomains = [
  { id: 'fullstack', label: 'Full-Stack', node: 'SUB_NODE_01' },
  { id: 'aiml', label: 'AI & ML', node: 'SUB_NODE_02' },
  { id: 'datascience', label: 'Data Science', node: 'SUB_NODE_03' },
  { id: 'cybersecurity', label: 'Cybersecurity', node: 'SUB_NODE_04' },
  { id: 'iot', label: 'IoT Systems', node: 'SUB_NODE_05' },
  { id: 'cbasics', label: 'C/C++ Mini Projects', node: 'SUB_NODE_06' },
]
