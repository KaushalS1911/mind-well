import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Divider,
} from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Box  sx={{ py: 12 }}>
      <Card
        sx={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, #002b5c 0%, #1e3a8a 100%)",
            color: "white",
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.9,
              mb: 1,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Emotionally Yours™
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Psykonnect Solutions Pvt. Ltd., formerly Mahadevasth Technologies
            Pvt. Ltd.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              mt: 2,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
            }}
          >
            Last Updated: September 25, 2024
          </Typography>
        </Box>

        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            {/* Introduction */}
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 4,
                color: "#374151",
                textAlign: "justify",
              }}
            >
              Psykonnect Solutions Private Limited (formerly Mahadevasth
              Technologies Pvt Ltd), operating under the brand Emotionallyours™,
              is committed to protecting the privacy of all users engaging with
              our emotional wellness services, including SHAPE™ (for academic
              institutions) and ESOP™ (for workplaces). This Privacy Policy
              outlines how we collect, use, store, and protect your personal and
              sensitive data.
            </Typography>

            {/* Privacy at a Glance */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "#002b5c",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                }}
              >
                Privacy at a Glance – For Our Users
              </Typography>
              <Box sx={{ pl: 2 }}>
                {[
                  {
                    title: "Students",
                    content:
                      "Basic details collected (name, age, school, class, email/phone if applicable). Annual screenings, mood journals, and classroom participation remain confidential. Data is used for growth tracking, academic performance improvement, and early identification of challenges.",
                  },
                  {
                    title: "Parents",
                    content:
                      "Parent contact info and workshop participation collected. Anonymized reports may be shared. Parental consent mandatory for minors.",
                  },
                  {
                    title: "Institutions",
                    content:
                      "Institutional details, program requirements, and feedback collected. Reports shared at aggregate levels. Data used to tailor SHAPE™ programs.",
                  },
                  {
                    title: "Individuals",
                    content:
                      "Counselling/course data collected directly. Sessions confidential except in safety/legal cases. Payments required upfront.",
                  },
                  {
                    title: "Workplace Organisations",
                    content:
                      "Employee well-being data collected via anonymous assessments. Only consolidated reports shared.",
                  },
                  {
                    title: "Psychologists / Wellness Professionals",
                    content:
                      "Professional credentials and documents collected. Strict confidentiality norms apply.",
                  },
                ].map((item, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#002b5c",
                        fontWeight: 600,
                        mb: 1,
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.title}:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4B5563",
                        lineHeight: 1.7,
                        pl: 2,
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Definitions */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "#002b5c",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                }}
              >
                Definitions
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4B5563",
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  <strong>Company:</strong> "Emotionally Yours™", "SHAPE™",
                  "ESOP™", "Psykonnect Solutions Pvt. Ltd.", "we", "our", "us".
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4B5563",
                    lineHeight: 1.7,
                  }}
                >
                  <strong>User:</strong> "You", "your", "client", "student",
                  "parent", "psychologist", "institution", "organization", or
                  "individual".
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Service Policies */}
            {[
              {
                title: "Nature of Services",
                content:
                  "Emotionally Yours™ delivers preventive and growth-focused emotional wellness solutions through SHAPE™ and ESOP™ Programs, and individual services like one-to-one counselling and capsule courses.",
              },
              {
                title: "Consent",
                content:
                  "By using our services, you consent to data collection, storage, processing, and sharing in line with this policy. Users under 18 require parental consent. Consent can be withdrawn via support@emotionallyours.com.",
              },
              {
                title: "Personal Information Collected",
                content:
                  "Basic details (name, age, contact info), professional/educational info, health-related data, platform usage, and payment details.",
              },
              {
                title: "Use of Personal Information",
                content:
                  "Data is used to deliver services, schedule sessions, customize resources, conduct anonymized research, and comply with legal requirements.",
              },
              {
                title: "Confidentiality & Exceptions",
                content:
                  "All data is confidential, except when disclosure is required by law, risk of harm, or coordinated care.",
              },
              {
                title: "Payments Policy",
                content:
                  "Payments via online mode only. Refunds and rescheduling policies vary for individual sessions and capsule courses.",
              },
              {
                title: "Terms & Conditions",
                content:
                  "Using our services implies agreement with this Privacy Policy. Misuse or false identity may result in termination.",
              },
              {
                title: "Security",
                content:
                  "Standard security practices are followed. No sessions are recorded.",
              },
              {
                title: "Cookies & Log Data",
                content:
                  "Cookies personalize your experience. Log data (IP, device info, usage stats) may be collected.",
              },
              {
                title: "International Data Transfers",
                content:
                  "Data may be stored/processed outside your country. By using our services, you consent to this.",
              },
            ].map((section, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: "#002b5c",
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4B5563",
                    lineHeight: 1.7,
                    pl: 2,
                  }}
                >
                  {section.content}
                </Typography>
                {index < 9 && <Divider sx={{ my: 3 }} />}
              </Box>
            ))}

            {/* Contact Information */}
            <Box
              sx={{
                mt: 6,
                p: 4,
                backgroundColor: "#F8FAFC",
                borderRadius: 2,
                border: "1px solid #E5E7EB",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "#002b5c",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Grievance Redressal
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#4B5563",
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                📧 support@emotionallyours.com
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#4B5563",
                  lineHeight: 1.8,
                }}
              >
                📍 Psykonnect Solutions Pvt. Ltd., B-205, Noida One, Sector 62,
                Noida, Uttar Pradesh – 201309
              </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "#002b5c",
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Jurisdiction
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#4B5563",
                  lineHeight: 1.7,
                  pl: 2,
                }}
              >
                Governed by Indian laws. Disputes under courts in Delhi, India.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
