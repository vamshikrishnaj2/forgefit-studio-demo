
import { FacilitySpotlight, MembershipPlan, Program, TestimonialTemplate, Trainer } from '../types';

import heroImage from '../assets/images/hero_forgefit_training_1790709793734.jpg';
import leadCoachImage from '../assets/images/trainer_lead_coach_1790709845225.jpg';
import elenaImage from '../assets/images/trainer_elena_rostova_1793214022712.jpg';
import davidImage from '../assets/images/trainer_david_chen_1793214024279.jpg';
import barbellAreaImage from '../assets/images/facility_barbell_area_1790709808984.jpg';
import conditioningTurfImage from '../assets/images/facility_conditioning_turf_1790709822689.jpg';
import recoveryLoungeImage from '../assets/images/facility_recovery_lounge_1790709833828.jpg';

export const HERO_IMAGE = heroImage;

export const PROGRAMS: Program[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    subtitle: 'Compound barbell fundamentals & progressive overload',
    description:
      'Periodized strength programming built around core compound lifts (squat, bench press, deadlift, overhead press). Supervised form correction, data tracking, and structured deloads ensure long-term adaptation without burnout.',
    keyOutcomes: [
      'Mastery of barbell mechanics and injury-resistant lifting technique',
      'Targeted 8-week progressive overload microcycles',
      'Consistent tracking of velocity, volume load, and recovery biomarkers',
    ],
    coachingRatio: 'Max 6:1 lifter-to-coach ratio',
    duration: '60 minutes',
    frequency: '3–4 sessions / week recommended',
    level: 'Beginner to Advanced',
    scheduleSample: [
      { day: 'Monday', focus: 'Lower Body Maximal Strength (Squat + Unilateral Hinge)' },
      { day: 'Wednesday', focus: 'Upper Body Horizontal Push / Pull & Triceps' },
      { day: 'Friday', focus: 'Posterior Chain & Deadlift Specialization' },
      { day: 'Saturday', focus: 'Overhead Pressing & Structural Accessories' },
    ],
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    subtitle: '1-on-1 dedicated programming & high-touch accountability',
    description:
      'Bespoke individual coaching tailored to your specific biomechanics, schedule constraints, and physical objectives. Each block begins with an orthopedic movement screen and structured nutritional framework.',
    keyOutcomes: [
      'Comprehensive functional movement screen (FMS) and postural audit',
      'Tailored individual periodization matched to your lifestyle',
      'Weekly coach review, video analysis, and direct messaging support',
    ],
    coachingRatio: '1:1 Private coaching',
    duration: '60 minutes',
    frequency: '2–3 sessions / week',
    level: 'All experience levels',
    scheduleSample: [
      { day: 'Custom Day 1', focus: 'Individual Movement Calibration & Primary Pattern' },
      { day: 'Custom Day 2', focus: 'Structural Balance & Antagonist Conditioning' },
      { day: 'Custom Day 3', focus: 'Energy System Adaptation & Mobility Check' },
    ],
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    subtitle: 'Athletic conditioning, engine building & multi-planar power',
    description:
      'Conditioning designed for real-world resilience. Combine sled work, kettlebell complexes, rowing ergometers, and rotational core work to develop a gas tank that performs outside the gym.',
    keyOutcomes: [
      'High-threshold cardiovascular stamina and lactate buffering',
      'Rotational power, grip strength, and multi-directional stability',
      'Non-impact conditioning protocols that spare your joints',
    ],
    coachingRatio: 'Max 10:1 coach ratio',
    duration: '50 minutes',
    frequency: '2–4 sessions / week',
    level: 'Intermediate to Athletic',
    scheduleSample: [
      { day: 'Tuesday', focus: 'Aerobic Capacity (RowErg, SkiErg & Turf Sled Sprints)' },
      { day: 'Thursday', focus: 'Kettlebell Density & Rotational Core Integration' },
      { day: 'Saturday', focus: 'Team Conditioning & Interval Endurance Gauntlets' },
    ],
  },
  {
    id: 'group-training',
    title: 'Group Training',
    subtitle: 'High-energy small cohorts led with technical precision',
    description:
      'The camaraderie of a team environment without compromising coaching quality. Small cohorts train together through synchronized tempo sets, athletic circuits, and collective challenges.',
    keyOutcomes: [
      'Supportive group energy that fosters consistent gym attendance',
      'Curated workouts scaled for differing fitness levels in real time',
      'Dynamic station rotations keeping focus high and transition time zero',
    ],
    coachingRatio: 'Max 10:1 cohort capacity',
    duration: '45 minutes',
    frequency: '3–5 sessions / week',
    level: 'Beginner to Advanced',
    scheduleSample: [
      { day: 'Mon / Wed', focus: 'Full-Body Foundation Circuit & Core Pacing' },
      { day: 'Tue / Thu', focus: 'Athletic Intervals & Metabolic Conditioning' },
      { day: 'Sat', focus: 'Forge Community Cohort & Functional Challenge' },
    ],
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Lead Strength & Barbell Coach',
    credentials: ['CSCS (NSCA)', 'USA Weightlifting Level 2', 'B.Sc. Exercise Science'],
    bio: 'Specializing in barbell biomechanics, power development, and injury resilience. Marcus has spent 8+ years developing structured lifting frameworks for recreational lifters and collegiate athletes alike.',
    specialties: ['Compound Lift Optimization', 'Barbell Velocity Training', 'Injury Mitigation'],
    image: leadCoachImage,
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Movement & Functional Conditioning Coach',
    credentials: ['B.Sc. Kinesiology', 'FMS Level 2 Certified', 'Precision Nutrition L1'],
    bio: 'Elena bridges the gap between raw capacity and joint longevity. Her coaching emphasizes multi-planar mobility, athletic kettlebell training, and sustainable work capacity.',
    specialties: ['Athletic Conditioning', 'Hip & Thoracic Mobility', 'Postural Restoration'],
    image: elenaImage,
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Performance & Group Cohort Director',
    credentials: ['NASM-PES', 'CrossCore Suspension Master', 'Exos Athletic Performance'],
    bio: 'Focused on creating high-trust group training environments where every member pushes their ceiling safely. David designs ForgeFit’s small group progression cycles.',
    specialties: ['Cohort Periodization', 'Metabolic Conditioning', 'Tempo & Energy Systems'],
    image: davidImage,
  },
];

export const FACILITIES: FacilitySpotlight[] = [
  {
    id: 'barbell-power-room',
    title: 'Precision Barbell & Power Racks',
    category: 'Heavy Training Zone',
    description:
      'Eight heavy-gauge matte black steel power cages, calibrated Eleiko bumper plates, competition barbells, and integrated rubber drop platforms.',
    image: barbellAreaImage,
    specs: ['8 Matte Black Power Racks', 'Calibrated Bumper Plates', 'Dual Deadlift Platforms'],
  },
  {
    id: 'conditioning-turf',
    title: '30-Meter High-Speed Turf Track',
    category: 'Athletic Conditioning',
    description:
      'Continuous padded indoor turf designed for heavy sled pushes, sprint acceleration work, medicine ball throws, and agility conditioning.',
    image: conditioningTurfImage,
    specs: ['30m Continuous Sprint Track', 'Heavy-Duty Weight Sleds', 'Concept2 Ergometer Fleet'],
  },
  {
    id: 'mobility-lounge',
    title: 'Mobility & Recovery Studio',
    category: 'Restoration',
    description:
      'Quiet dedicated space equipped with vibrating massage tools, targeted foam rollers, warm ambient lighting, and banded mobility stations.',
    image: recoveryLoungeImage,
    specs: ['Hyperice Percussive Tools', 'Targeted Mobility Bands', 'Guided Stretching Zones'],
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 129,
    annualPriceMonthly: 109,
    tagline: 'Ideal for independent lifters seeking access to a high-standard training floor.',
    features: [
      'Full open gym access during all facility operating hours',
      'Initial 60-min movement screen & equipment onboarding',
      '4 coached small-group sessions per calendar month',
      'ForgeFit mobile training app & workout logging',
      'Full locker, shower, and towel service amenities',
    ],
    notIncluded: ['Weekly 1-on-1 coach check-ins', 'Priority personal training reservations'],
  },
  {
    id: 'performance',
    name: 'Performance',
    monthlyPrice: 199,
    annualPriceMonthly: 169,
    tagline: 'Our signature tier for athletes seeking coached progression and complete programming.',
    isPopular: true,
    features: [
      'Unlimited 7-day facility and open gym floor access',
      'Unlimited small-group cohort sessions (Strength + Functional)',
      'Monthly 1-on-1 coach review & lifting video analysis',
      'Full access to Mobility & Recovery Studio equipment',
      'Quarterly body composition and strength benchmark testing',
      '2 complimentary guest training passes every month',
    ],
  },
  {
    id: 'personal',
    name: 'Personal',
    monthlyPrice: 349,
    annualPriceMonthly: 299,
    tagline: 'Maximum guidance with dedicated 1-on-1 coaching sessions each week.',
    features: [
      'All Performance Tier membership privileges included',
      '2 weekly private 1-on-1 coaching sessions (8 / month)',
      '100% customized periodized training programming',
      'Individual nutrition framework and lifestyle consulting',
      'Dedicated private lifting bay reservation rights',
      'Direct WhatsApp access to your assigned lead coach',
    ],
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialTemplate[] = [
  {
    id: 'sample-1',
    archetype: 'Strength Progression Template',
    quote:
      'Having a coach watch bar path on compound lifts changed everything. The 8-week block progression took the guesswork out of what weight to put on the bar, and my back has never felt better.',
    memberContext: 'Alex R. · Software Engineer (Demo Profile)',
    focusArea: 'Strength Training Program',
    timeframe: '8-Month Sample Cohort',
  },
  {
    id: 'sample-2',
    archetype: 'Consistency & Joint Health Template',
    quote:
      'I used to bounce between random fitness classes and get burnt out. ForgeFit’s structure gave me a predictable routine that fits around my work hours without feeling overwhelmed.',
    memberContext: 'Priya M. · Product Lead (Demo Profile)',
    focusArea: 'Functional Fitness Program',
    timeframe: '12-Month Sample Cohort',
  },
  {
    id: 'sample-3',
    archetype: 'Small-Group Camaraderie Template',
    quote:
      'The 10-person group cap makes a massive difference. You get real coaching attention and form checks, but with the energy and accountability of people cheering for your last rep.',
    memberContext: 'Jordan T. · Graphic Designer (Demo Profile)',
    focusArea: 'Group Training Cohort',
    timeframe: '6-Month Sample Cohort',
  },
];

export const GYM_DETAILS = {
  name: 'ForgeFit Studio',
  tagline: 'Build strength. Build consistency.',
  fictionalNotice: 'DEMO CONCEPT — Sample website for portfolio demonstration. All details are fictional.',
  address: {
    street: '742 Foundry Way, Industrial District',
    suite: 'Suite 100 — Ground Floor',
    cityStateZip: 'Metro Central, MC 94103',
    directionsNote: 'Convenient ground-level entrance with 24 dedicated member parking spots and secure indoor bike storage.',
  },
  hours: [
    { days: 'Monday – Friday', time: '5:30 AM – 9:00 PM', openHour: 5.5, closeHour: 21 },
    { days: 'Saturday', time: '7:00 AM – 6:00 PM', openHour: 7, closeHour: 18 },
    { days: 'Sunday', time: '8:00 AM – 3:00 PM', openHour: 8, closeHour: 15 },
  ],
  contact: {
    phoneDisplay: '+1 (555) 019-3674',
    phoneHref: 'tel:5550193674',
    whatsappDisplay: '+1 (555) 019-3674',
    whatsappHref: 'https://wa.me/15550193674?text=Hello%20ForgeFit%20(Demo)%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20programs.',
    email: 'info@forgefit-demo.com',
  },
};
