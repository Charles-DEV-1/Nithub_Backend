const express = require('express');
const cors = require('cors');
const app = express();

// Allow frontend websites to read this public API.
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', (error) => {
    if (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});
