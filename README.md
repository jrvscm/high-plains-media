# My Portfolio

[High Plains Media](https://highplainsmedia.com)

Welcome to my personal portfolio website! This project showcases my skills, projects, and experience, built to demonstrate my abilities as a developer and designer.


## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Frontend**: [React](https://reactjs.org/), [styled-components](https://styled-components.com/)
- **CMS**: [Contentful](https://www.contentful.com/) for managing and updating content dynamically
- **Forms**: [Netlify Forms](https://docs.netlify.com/forms/setup/) for handling contact form submissions
- **Deployment**: [Netlify](https://www.netlify.com/)
- **Payments**: [Stripe](https://stripe.com/) for handling payments


## 🎯 Features

- **Dynamic Content**: All content is managed in Contentful, allowing easy updates without code changes.
- **Responsive Design**: The site is fully responsive, ensuring an optimized experience across all devices.
- **Contact Form**: A simple and effective contact form powered by Netlify Forms for handling submissions.
- **Fast and Secure Hosting**: Hosted on Netlify, providing fast load times, HTTPS, and continuous deployment.
- **Payment integration via Stripe API**: Stripe payments are integrated and can set them up with your own stripe account.


## 🛠 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-site.git
   cd portfolio-site
   ```
   
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

- Create a .env.local file at the root of your project.

- Add your Contentful and Netlify environment variables as shown below:

  ```bash
  CONTENTFUL_SPACE_ID=
  CONTENTFUL_ACCESS_TOKEN=
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY=
  ```

4. **Run the application:**

   ```bash
    npm run dev
    Your site should now be running on http://localhost:3000
   ```
   

## 📂 Project Structure


Here's a brief overview of the main folders and files:

- **/components:** Reusable components used throughout the site.
- **/pages:** All pages of the site, leveraging Next.js' file-based routing.
- **/styles:** Global styles and theme setup using styled-components.
- **/utils:** Utility files such as communication with Contentful
  

## 📦 Deployment

The project is continuously deployed via Netlify. Commits pushed to the main branch are automatically deployed.
