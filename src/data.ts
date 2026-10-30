import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'autonomous-drone',
    number: '01',
    title: 'AI-powered autonomous drone',
    type: 'Computer vision · autonomous systems',
    status: 'Completed',
    institution: 'Individual capstone · University of Essex',
    summary: 'An autonomous drone system designed to monitor construction-site safety by detecting hardhat compliance using computer vision and executing autonomous flight missions.',
    role: 'End-to-end system development',
    technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'PX4', 'MAVSDK', 'Tkinter'],
    contributions: [
      'Trained a YOLOv8 object detection model for hardhat compliance detection.',
      'Integrated perception, mission control and telemetry in a modular Python architecture.',
      'Implemented autonomous mission execution and teach-and-repeat navigation using PX4 and MAVSDK.',
      'Built real-time detection pipelines and a Tkinter monitoring dashboard.',
      'Tested the system with software-in-the-loop simulation and controlled real-world environments.',
    ],
    media: [
      { src: '/assets/images/drone-hero-web.jpg', alt: 'Autonomous drone project photograph', caption: 'Autonomous drone project photograph.' },
      { src: '/assets/images/drone-yolo-detection.jpg', alt: 'YOLOv8 construction safety detection', caption: 'YOLOv8 detection output.' },
      { src: '/assets/images/drone_dashboard.png', alt: 'Tkinter drone monitoring dashboard', caption: 'Monitoring interface for mission and telemetry data.' },
      { src: '/assets/images/drone-simulation.jpg', alt: 'Software in the loop drone simulation', caption: 'Software-in-the-loop simulation.' },
      { src: '/assets/videos/drone_demo.mov', alt: '', caption: 'Drone demonstration video.', kind: 'video', poster: '/assets/images/drone-hero-web.jpg' },
    ],
    metric: { value: '0.93', label: 'mAP@0.5 hardhat detection' },
    caseStudy: [
      { label: 'The problem', text: 'Construction-site PPE compliance creates a practical monitoring challenge: observations need to be repeatable, timely and useful to an operator.' },
      { label: 'The approach', text: 'A drone-based perception system combines visual detection with autonomous mission execution, so the model is part of a wider operational workflow.' },
      { label: 'The system', text: 'Camera input flows through YOLOv8 and OpenCV into perception results, mission logic, PX4/MAVSDK control, telemetry and a Tkinter dashboard.' },
      { label: 'The result', text: 'The trained model achieved 0.93 mAP@0.5. The integrated system was tested in software-in-the-loop simulation and controlled real-world environments.' },
    ],
  },
  {
    id: 'mobile-robot',
    number: '02',
    title: 'Autonomous mobile robot navigation',
    type: 'Mobile robotics · mapping',
    status: 'Completed',
    institution: 'Mini-assignment · University of Essex',
    summary: 'A simulated mobile robot navigation solution for moving between target locations using mapping, localisation and autonomous navigation techniques.',
    role: 'Simulation and navigation development',
    technologies: ['SLAM', 'Mapping', 'Localisation', 'Autonomous navigation'],
    contributions: ['Generated an environment map.', 'Developed a simulated navigation solution for movement between target locations.', 'Investigated the mapping and localisation concepts that support autonomous movement.'],
    media: [
      { src: '/assets/images/mobile-robot-map.jpg', alt: 'Generated mobile robot environment map', caption: 'Generated mobile robot environment map.' },
      { src: '/assets/images/mobile-robot-simulation.JPG', alt: 'Mobile robot simulation', caption: 'Mobile robot simulation.' },
    ],
  },
  {
    id: 'leo-rover',
    number: '03',
    title: 'Leo Rover object retrieval',
    type: 'ROS 2 · simulation · system integration',
    status: 'In progress',
    institution: 'MSc Robotics team project · University of Manchester',
    summary: 'A team project exploring a robot that can search for coloured objects, retrieve them, return to its starting point and place them in a matching coloured bin.',
    role: 'Current postgraduate engineering project',
    technologies: ['ROS 2 Jazzy', 'Gazebo', 'Linux / Ubuntu', 'Python', 'Mobile robotics'],
    contributions: ['Exploring and troubleshooting ROS 2 and Gazebo simulation.', 'Investigating robot control, velocity commands, simulation behaviour and odometry.', 'Working with the software and simulation infrastructure required to develop the intended autonomous task.'],
    media: [
      { src: '/assets/images/leo-rover-hero.jpg', alt: 'Leo Rover project photograph', caption: 'Leo Rover project photograph.' },
    ],
    caseStudy: [
      { label: 'Customer requirement', text: 'Develop a robot capable of searching an environment for coloured objects, retrieving them and placing them in matching bins.' },
      { label: 'Intended behaviour', text: 'The intended workflow is Explore → Detect → Navigate → Retrieve → Return → Identify bin → Deposit. This describes the target task, not completed functionality.' },
      { label: 'Development environment', text: 'The project uses ROS 2 Jazzy and Gazebo with the Leo Rover simulation environment on Linux/Ubuntu.' },
      { label: 'Engineering investigations', text: 'Current work includes understanding velocity commands, odometry, simulation behaviour and the integration points needed for validation.' },
    ],
  },
]

export const skillGroups = [
  { label: 'Programming', items: ['Python', 'Java', 'C#', 'SQL'] },
  { label: 'Robotics & autonomous systems', items: ['ROS 2', 'PX4', 'MAVSDK', 'MAVLink', 'Gazebo', 'QGroundControl'] },
  { label: 'AI & computer vision', items: ['PyTorch', 'YOLOv8', 'OpenCV', 'Machine learning', 'Object detection'] },
  { label: 'Development tools', items: ['Git', 'Linux / Ubuntu', 'Tkinter'] },
  { label: 'Technical concepts', items: ['SLAM', 'Autonomous systems', 'Real-time systems', 'System integration'] },
]

export const experience = [
  { dates: 'Aug 2022 — Jul 2025', title: 'Rental Property Manager', organisation: 'Airbnb / rental property management', location: 'Bradford', text: 'Managed day-to-day rental operations, including bookings, scheduling, guest communication and issue resolution.', points: ['Managed multiple concurrent responsibilities independently.', 'Coordinated operational activities and maintained service standards.', 'Communicated with guests and resolved issues with ownership.'] },
  { dates: 'Jan 2020 — Mar 2022', title: 'Data Entry / Operations Support', organisation: 'HiTech Powder Coating', location: 'Leeds', text: 'Supported business operations through data entry, operational record maintenance and administrative processes using Excel.', points: ['Maintained accuracy across operational records.', 'Supported organised, detail-oriented administrative processes.', 'Contributed reliable data management and operational support.'] },
]
