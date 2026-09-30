const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Allow frontend websites to read this public API.
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());
// Serve images locally; Vercel serves the public folder directly.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/program-benefits', (req, res) => {
    res.status(200).json({
  "benefits": [
    {
      "id": "masterclasses",
      "title": "Expert-led masterclasses",
      "description": "Connect with experienced entrepreneurs and industry leaders who will provide personalized guidance and support."
    },
    {
      "id": "mentors",
      "title": "Dedicated mentors for guidance",
      "description": "Gain access to funding opportunities, workspace, and other essential resources to fuel your growth."
    },
    {
      "id": "coworking",
      "title": "Co-working & meeting room access",
      "description": "Join a vibrant community of fellow founders, investors, and mentors to expand your network and collaborate."
    },
    {
      "id": "demo-day",
      "title": "Demo Day with investors and partners",
      "description": "Showcase your venture to a curated audience of top-tier investors, corporate partners, and ecosystem leaders at Demo Day."
    },
    {
      "id": "post-program-support",
      "title": "Post-program support for scale",
      "description": "Gain continued access to mentorship, strategic guidance, and growth resources designed to help you scale confidently and sustainably long after the program ends."
    },
    {
      "id": "tools-resources",
      "title": "Tools & resources",
      "description": "Accelerate your progress with a comprehensive suite of tools tailored to meet early-stage needs."
    }
  ]
})
})

app.get('/api/timeline', (req, res) => {
    res.status(200).json({
        timeline: [
            {
                id: 'applications-open',
                title: 'Applications Open',
                date: '2nd of June, 2025',
                imageUrl: '/images/applicationOpen.svg'
            },
            {
                id: 'applications-close',
                title: 'Applications Close',
                date: '15th of June, 2025',
                imageUrl: '/images/Application_close.png'
            },
            {
                id: 'selection-interviews',
                title: 'Selection Interviews',
                date: '16th of June - 22nd of July, 2025',
                imageUrl: '/images/selection%20interview.svg'
            },
            {
                id: 'program-starts',
                title: 'Program Starts',
                date: 'August 2025',
                imageUrl: '/images/program_start.png'
            }
        ]
    });
});

const PORT = process.env.PORT || 3001;
// The port that the deployed render server will recieve
app.listen(PORT, '0.0.0.0', (error) => {
    if (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});
