# Workshop Registration (Campus Create)

**Name:** COMFORT SHALOM.N
**Student number:** S25D14/017 - B34763
**Course / Lab:** WEB AND MOBILE APPLICATION DEVELOPMENT -  WORKSHOP REGISTRATION LAB

## Project description

Campus Create is a responsive, browser-only workshop registration page. A student
fills in a two-column form, and the page checks the input and shows a clear
preview message. It is a classroom demonstration: it does not create an account,
send a request or save any details. Use invented details and a practice password only.

### TASKS COMPLETED

**HTML (index.html): HTML1**

- Email: `type="email"` and `required`
- Portfolio: `type="url"` (left optional)
- Preferred date: `type="date"` and `required`
- Seats: `type="number"`, `required`, `min="1"`, `max="4"`, `step="1"`

**CSS (styles.css): CSS1 and CSS2**

- Two equal columns with `grid-template-columns: 1fr 1fr;` and `gap: 17px 18px;`
- Purple submit button using `background: var(--accent);` and `color: white;`
- A supplied media query switches to one column below 480px, and focus outlines
  are visible when tabbing.

**JavaScript (app.js): JS1 to JS4**

- **JS1:** a `workshops` array and a `for...of` loop that creates one `<option>`
  per workshop and appends it to the dropdown.
- **JS2:** an `if/else` that compares the two passwords and uses
  `setCustomValidity()` to set or clear the "The passwords must match." message.
- **JS3:** `form.reportValidity()` checks every rule. If anything fails, a red
  message is shown and the handler stops with `return`.
- **JS4:** `seats.valueAsNumber` gives a real number, and an `if/else` chooses
  "Individual booking" (1 seat) or "Group booking" (2 to 4 seats). The green
  preview never shows the password.

**Extensions (outside the core 60 minutes)**

- **Fourth workshop:** "Accessibility Basics" was added to the `workshops` array,
  so the dropdown now has four workshops.
- **Reset button:** a "Reset form" button placed directly after the
  "03 Build together" item. It is linked to the form with
  `form="registrationForm"` and uses a `reset` event handler in `app.js` to:
  1. empty the fields (seats back to 1, workshop back to the placeholder, agreement unticked),
  2. clear all custom validity messages,
  3. remove the `was-validated` class,
  4. clear and hide the feedback message,
  5. move the cursor back to the Full name field.

## VALIDATION RULES

| Field | Rule |
|---|---|
| Full name           | At least 2 characters after trimming outer spaces |
| Email               | Required, valid email syntax |
| Telephone           | Optional; 9 to 15 digits, no spaces |
| Portfolio           | Optional; if entered, a complete URL |
| Preferred date      | Required; today or later |
| Seats               | Required; a whole number from 1 to 4 |
| Workshop            | One workshop must be selected |
| Password            | At least 10 characters |
| Confirm password    | Must match the password |
| Agreement           | Must be ticked |

## HOW TO RUN THE PROJECT

No installation, server or internet connection is needed.

1. Download or clone this repository and keep `index.html`, `styles.css` and
   `app.js` together in the same folder.
2. Open `index.html` in a web browser (double-click it, or right-click and choose
   Open with, then your browser).
3. Fill in the form with invented details and click **Preview registration**.
4. Click **Reset form** (under "03 Build together") to clear everything and start again.
5. To edit the project, open the three files in a text editor, save, and reload
   the browser page.

## TESTING

A pass/fail test record (`Workshop_Registration_Test_Record.docx`) covers: empty
required fields, invalid and valid email, telephone, portfolio, date and seats
values, password length and mismatch, the unchecked agreement, a fully valid
registration, the 390px mobile layout, and Tab keyboard navigation.

## FILES

| File | Purpose |
|---|---|
| `index.html` | Page structure, form controls and the Reset button |
| `styles.css` | Layout, colours, focus styles and responsive rules |
| `app.js`     | Workshop choices, validation, result message and reset logic |
| `README.md`  | Project description and run instructions |

## SIDE NOTES

This is a local interface demonstration. In a real service, validation must be
repeated on the server and secure authentication must be used.
