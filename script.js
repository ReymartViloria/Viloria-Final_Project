document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")
  const themeToggle = document.getElementById("theme-toggle")
  const skillTabs = document.querySelectorAll(".skill-tab")
  const skillContents = document.querySelectorAll(".skills-tab-content")
  const contactForm = document.getElementById("contact-form")
  const currentYearEl = document.getElementById("current-year")

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear()
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      const icon = mobileMenuBtn.querySelector("i")
      if (icon) {
        if (mobileMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars")
          icon.classList.add("fa-times")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      }
    })
  }

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    if (link && mobileMenu) {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        const icon = mobileMenuBtn?.querySelector("i")
        if (icon) {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      })
    }
  })

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode")

      const icon = themeToggle.querySelector("i")
      if (icon) {
        if (document.body.classList.contains("dark-mode")) {
          icon.classList.remove("fa-moon")
          icon.classList.add("fa-sun")
          localStorage.setItem("theme", "dark")
        } else {
          icon.classList.remove("fa-sun")
          icon.classList.add("fa-moon")
          localStorage.setItem("theme", "light")
        }
      }
    })
  }

  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("dark-mode")
    const icon = themeToggle?.querySelector("i")
    if (icon) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    }
  }

  if (skillTabs.length > 0 && skillContents.length > 0) {
    skillTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        skillTabs.forEach((t) => t.classList.remove("active"))

        tab.classList.add("active")

        const tabId = tab.getAttribute("data-tab")
        skillContents.forEach((content) => {
          content.classList.remove("active")
          if (content.id === `${tabId}-skills`) {
            content.classList.add("active")
          }
        })
      })
    })
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const messageInput = document.getElementById("message")

      const nameError = document.getElementById("name-error")
      const emailError = document.getElementById("email-error")
      const messageError = document.getElementById("message-error")

      if (nameError) nameError.textContent = ""
      if (emailError) emailError.textContent = ""
      if (messageError) messageError.textContent = ""

      if (nameInput && nameInput.value.trim() === "") {
        if (nameError) nameError.textContent = "Name is required"
        nameInput.focus()
        return
      }

      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(emailInput.value)) {
          if (emailError) emailError.textContent = "Please enter a valid email address"
          emailInput.focus()
          return
        }
      }

      if (messageInput) {
        if (messageInput.value.trim() === "") {
          if (messageError) messageError.textContent = "Message is required"
          messageInput.focus()
          return
        } else if (messageInput.value.length < 10) {
          if (messageError) messageError.textContent = "Message must be at least 10 characters"
          messageInput.focus()
          return
        }
      }

      const submitBtn = contactForm.querySelector(".submit-btn")
      if (submitBtn) {
        const originalBtnText = submitBtn.innerHTML
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
        submitBtn.disabled = true

        setTimeout(() => {
          contactForm.reset()

          const formStatus = document.getElementById("form-status")
          if (formStatus) {
            formStatus.textContent = "Your message has been sent successfully!"
            formStatus.classList.add("success")

            setTimeout(() => {
              formStatus.textContent = ""
              formStatus.classList.remove("success")
            }, 5000)
          }

          submitBtn.innerHTML = originalBtnText
          submitBtn.disabled = false
        }, 1500)
      }
    })
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth",
        })
      }
    })
  })
})
