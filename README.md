# Ecomply - E-Commerce Law Compliance Checker

![Ecomply Logo](📋)

**Ecomply** is a web application that helps e-commerce businesses in the Philippines ensure their Terms of Service and Privacy Policy documents comply with **RA No. 11967** (Internet Transactions Act).

## 🚀 Features

- **Document Analysis**: Upload and analyze Terms of Service and Privacy Policy documents
- **Compliance Scoring**: Get detailed compliance scores based on RA No. 11967 requirements
- **AI-Powered Recommendations**: Receive specific suggestions for improving document compliance
- **Section-by-Section Breakdown**: Detailed analysis of each required section
- **User Authentication**: Secure user accounts with Supabase Auth
- **Contact Form**: Direct communication with support team
- **Mock Templates**: Access compliant document templates

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI Analysis**: Google Gemini API
- **Deployment**: Vercel (recommended)

## 📋 Requirements

- Node.js 18+ 
- npm or yarn
- Supabase account
- Google Gemini API key

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ecomply
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Email Service (Optional - for contact form)
RESEND_API_KEY=your_resend_api_key
```

### 4. Database Setup

1. Create a Supabase project
2. Run the SQL script in `src/sql/contact_submissions.sql` in your Supabase SQL editor
3. Configure authentication settings in Supabase dashboard:
   - **Site URL**: Set to your production domain (e.g., `https://yourdomain.com`)
   - **Additional redirect URLs**: Add `https://yourdomain.com/auth/callback` and `https://yourdomain.com/dashboard`
   - **Email confirmations**: Choose to enable or disable based on your needs

> **Important**: For production deployment authentication issues, see `docs/SUPABASE_AUTH_CONFIG.md` for detailed configuration guidance.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
ecomply/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   └── dashboard/         # Dashboard page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   └── *.tsx             # Custom components
│   ├── lib/                  # Utility libraries
│   ├── sql/                  # Database schemas
│   └── templates/            # Document templates
├── docs/                     # Documentation
├── public/                   # Static assets
└── README.md
```

## 🔧 Configuration

### Email Integration

For production email functionality, see `docs/EMAIL_SETUP.md` for detailed setup instructions with services like Resend or SendGrid.

### Database Schema

Run the provided SQL scripts in your Supabase dashboard:
- `src/sql/contact_submissions.sql` - Contact form submissions table

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## 📖 Usage

1. **Sign Up/Login**: Create an account or sign in
2. **Upload Documents**: Navigate to dashboard and upload your Terms of Service and Privacy Policy
3. **Get Analysis**: Receive detailed compliance scores and recommendations
4. **Review Results**: Use the comprehensive results dashboard to understand compliance status
5. **Download Report**: Get a full compliance report for your records

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For questions, issues, or support:

- **Email**: arisantonioco@gmail.com
- **Issues**: Create an issue on GitHub
- **Documentation**: Check the `docs/` folder

## 🏗️ Development Status

### ✅ Completed Features
- User authentication and authorization
- Document analysis workflow
- Results dashboard with scoring
- Contact form with email integration
- Mock compliant document templates
- Responsive UI design

### 🚧 In Progress
- Enhanced AI analysis algorithms
- Document export functionality
- Admin dashboard for contact submissions

### 📋 Planned Features
- Multi-language support
- Document versioning
- Compliance tracking over time
- Integration with legal databases
- API for third-party integrations

## 🔒 Security

- All user data is encrypted in transit and at rest
- Secure authentication with Supabase
- Input validation and sanitization
- CSRF protection
- Rate limiting (recommended for production)

## 📊 Analytics

The application includes:
- User engagement tracking
- Document analysis metrics
- Compliance score analytics
- Performance monitoring

---

**Built with ❤️ for Philippine e-commerce businesses**

*Ensuring compliance with RA No. 11967 - Internet Transactions Act*
