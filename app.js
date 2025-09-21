      const menuBtn = document.querySelector(".mobile-menu-btn");
      const nav = document.querySelector("nav");

      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            nav.classList.remove("active");
          }
        });
      });

      // Loan calculator function
      function calculateLoan() {
        const loanAmount = parseFloat(
          document.getElementById("loan-amount").value
        );
        const interestRate = parseFloat(
          document.getElementById("interest-rate").value
        );
        const loanTerm = parseInt(document.getElementById("loan-term").value);

        // Monthly interest rate
        const monthlyRate = interestRate / 100 / 12;

        // Number of payments
        const numberOfPayments = loanTerm * 12;

        // Calculate monthly payment
        const monthlyPayment =
          (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        // Display result
        document.getElementById("monthly-payment").textContent =
          "$" + monthlyPayment.toFixed(2);
      }

      // Initialize calculator on page load
      window.onload = function () {
        calculateLoan();
      };