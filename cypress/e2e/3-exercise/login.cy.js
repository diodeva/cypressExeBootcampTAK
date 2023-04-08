function generateRandomUsername() {
  const timestamp = Date.now(); // menghasilkan timestamp saat ini dalam milidetik
  const randomNum = Math.floor(Math.random() * 1000); // menghasilkan nomor acak antara 0 dan 999
  const username = `user${timestamp}${randomNum}`; // menggabungkan timestamp dan nomor acak menjadi username
  return username;
}

function generatePhoneNumber() {
  const randomDigits = Math.floor(Math.random() * 1000000000); // Menghasilkan angka acak dengan 9 digit
  const phoneNumber = `62${randomDigits.toString().padStart(9, '0')}`; // Memformat nomor telepon
  return phoneNumber;
}

function generateRandomEmail() {
  const randomEmail = Math.random().toString(36).substring(2, 15) + '@example.com' // Generates a random email
  return randomEmail;
}



// describe('Sign up Itera', () => {


//   it('success signup', () => {
//     const username = generateRandomUsername();
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').type('super')
//     cy.get('#Surname').type('qa')
//     cy.get('#Username').type(username)
//     cy.get('#Password').type('qwerty123')
//     cy.get('#ConfirmPassword').type('qwerty123')
//     cy.get('#submit').click()
//     cy.get('.label-success').contains('Registration Successful')
    


//   })

//   it('failed signup - empty first name', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').clear().blur()
//     cy.get('#Surname').type('qa')
//     cy.get('#Username').type('superQAE')
//     cy.get('#Password').type('qwerty123')
//     cy.get('#ConfirmPassword').type('qwerty123')
//     cy.get('#submit').click()
//     cy.get('#FirstName-error').contains('Please enter first name')


//   })

//   it('failed signup - empty surname', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').type('super')
//     cy.get('#Surname').clear().blur()
//     cy.get('#Username').type('superQAE')
//     cy.get('#Password').type('qwerty123')
//     cy.get('#ConfirmPassword').type('qwerty123')
//     cy.get('#submit').click()
//     cy.get('#Surname-error').contains('Please enter surname')


//   })

//   it('failed signup - empty username', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').type('super')
//     cy.get('#Surname').type('qa')
//     cy.get('#Username').clear().blur()
//     cy.get('#Password').type('qwerty123')
//     cy.get('#ConfirmPassword').type('qwerty123')
//     cy.get('#submit').click()
//     cy.get('#Username-error').contains('Please enter username')

//   })

//   it('failed signup - empty password', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').type('super')
//     cy.get('#Surname').type('qa')
//     cy.get('#Username').type('superQAE')
//     cy.get('#Password').clear().blur()
//     cy.get('#ConfirmPassword').type('qwerty123')
//     cy.get('#submit').click()
//     cy.get('#ConfirmPassword-error').contains("'Confirm password' and 'Password' do not match.")


//   })

//   it('failed signup - empty co password', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').type('super')
//     cy.get('#Surname').type('qa')
//     cy.get('#Username').type('superQAE')
//     cy.get('#Password').type('qwerty123')
//     cy.get('#ConfirmPassword').clear().blur()
//     cy.get('#submit').click()
//     cy.get('#ConfirmPassword-error').contains("'Confirm password' and 'Password' do not match.")


//   })

//   it('failed signup - mismatch co password', () => {
//     const username = generateRandomUsername();
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').type('super')
//     cy.get('#Surname').type('qa')
//     cy.get('#Username').type(username)
//     cy.get('#Password').type('qwerty123')
//     cy.get('#ConfirmPassword').type(username)
//     cy.get('#submit').click()
//     cy.get('#ConfirmPassword-error').contains("'Confirm password' and 'Password' do not match.")


//   })

  
//   it('failed signup - username exist', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/NewUser"]').click()
//     cy.get('#FirstName').type('super')
//     cy.get('#Surname').type('qa')
//     cy.get('#Username').type('superQAE') //already exist
//     cy.get('#Password').type('qwerty123')
//     cy.get('#ConfirmPassword').type('qwerty123')
//     cy.get('#submit').click()
//     cy.get('.label-danger').contains('Username already exist')


//   })
// })

// describe('Login Itera', () => {


//   it('success login', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/Login"]').click()
//     cy.get('#Username').clear().type('firstQA')
//     cy.get('#Password').clear().type('qwerty123')
//     cy.get('.btn-primary').click()
//     cy.get('a[href*="/Login/LogOut"]').click()



//   })

//   it('failed login - username doesnt exist', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/Login"]').click()
//     cy.get('#Username').clear().type('failedtest23')
//     cy.get('#Password').clear().type('qwerty123')
//     cy.get('.btn-primary').click()
//     cy.get('.alert-danger').contains('Wrong username or password')


//   })

//   it('failed login - wrong password', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/Login"]').click()
//     cy.get('#Username').clear().type('firstQA')
//     cy.get('#Password').clear().type('qwerty')
//     cy.get('.btn-primary').click()
//     cy.get('.alert-danger').contains('Wrong username or password')


//   })

//   it('failed login - empty username', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/Login"]').click()
//     cy.get('#Username').clear().blur()
//     cy.get('#Password').clear().type('qwerty123')
//     cy.get('.btn-primary').click()
//     cy.get('.alert-danger').contains('Wrong username or password')


//   })

//   it('failed login - empty password', () => {
//     cy.visit('https://itera-qa.azurewebsites.net/')
//     cy.get('a[href*="/Login"]').click()
//     cy.get('#Username').clear().type('firstQA')
//     cy.get('#Password').clear().blur()
//     cy.get('.btn-primary').click()
//     cy.get('.alert-danger').contains('Wrong username or password')


//   })
// })

describe('Dashboard Itera', () => {


  it('positive - create new customer', () => {
    const username = generateRandomUsername();
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click() //button login
    cy.get('a[href*="/Customer/Create"]').click()
    cy.get('#Name').type('QA ' + username)
    cy.get('#Company').type('Kemenkominfo Indonesia')
    cy.get('#Address').type('Indonesia')
    cy.get('#City').type('Jakarta')
    cy.get('#Phone').type('0811111111')
    cy.get('#Email').type(username + '@mail.co.id')
    cy.get('.btn.btn-primary').click()
    cy.get('#searching').type('QA ' + username)
    cy.get('input[value="Search"]').filter('[type="submit"]').click();
    cy.get('.table.table-hover').should('contain.text', username)
    cy.get('a[href*="/Login/LogOut"]').click()
    


  })

  it('positive - search customer details by name', () => {
    const username = generateRandomUsername();
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click() //button login
    cy.get('a[href*="/Customer/Create"]').click()
    cy.get('#Name').type('QA ' + username)
    cy.get('#Company').type('Kemenkominfo Indonesia')
    cy.get('#Address').type('Indonesia')
    cy.get('#City').type('Jakarta')
    cy.get('#Phone').type('0811111111')
    cy.get('#Email').type(username + '@mail.co.id')
    cy.get('.btn.btn-primary').click()
    cy.get('#searching').type('QA ' + username)
    cy.get('input[value="Search"]').filter('[type="submit"]').click();
    cy.get('.table.table-hover').should('contain.text', username)
    cy.get('a[href*="/Login/LogOut"]').click()


  })

  it('positive - search customer details by phone number', () => {
    const username = generateRandomUsername()
    const phoneNumber = generatePhoneNumber()
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click() //button login
    cy.get('a[href*="/Customer/Create"]').click()
    cy.get('#Name').type('QA ' + username)
    cy.get('#Company').type('Kemenkominfo Indonesia')
    cy.get('#Address').type('Indonesia')
    cy.get('#City').type('Jakarta')
    cy.get('#Phone').type(phoneNumber)
    cy.get('#Email').type(username + '@mail.co.id')
    cy.get('.btn.btn-primary').click() // button create
    cy.get('#searching').type(phoneNumber)
    cy.get('input[value="Search"]').filter('[type="submit"]').click() //button search
    cy.get('.table.table-hover').should('contain.text', phoneNumber)
    cy.get('a[href*="/Login/LogOut"]').click()

  })

  it('positive - search customer details by email', () => {
    const username = generateRandomUsername()
    const phoneNumber = generatePhoneNumber()
    const emails = generateRandomEmail()
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click() //button login
    cy.get('a[href*="/Customer/Create"]').click()
    cy.get('#Name').type('QA ' + username)
    cy.get('#Company').type('Kemenkominfo Indonesia')
    cy.get('#Address').type('Indonesia')
    cy.get('#City').type('Jakarta')
    cy.get('#Phone').type(phoneNumber)
    cy.get('#Email').type(emails)
    cy.get('.btn.btn-primary').click() // button create
    cy.get('#searching').type(emails)
    cy.get('input[value="Search"]').filter('[type="submit"]').click() //button search
    cy.get('.table.table-hover').should('contain.text', emails)
    cy.get('a[href*="/Login/LogOut"]').click()

  })

  it('positive - update customer details', () => {
    const username = generateRandomUsername()
    const phoneNumber = generatePhoneNumber()
    const emails = generateRandomEmail()
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click() //button login
    cy.get('a[href*="/Customer/Create"]').click()
    cy.get('#Name').type('QA ' + username)
    cy.get('#Company').type('Kemenkominfo Indonesia')
    cy.get('#Address').type('Indonesia')
    cy.get('#City').type('Jakarta')
    cy.get('#Phone').type(phoneNumber)
    cy.get('#Email').type(emails)
    cy.get('.btn.btn-primary').click() // button create
    cy.get('#searching').type(emails)
    cy.get('input[value="Search"]').filter('[type="submit"]').click() //button search
    cy.get('.table.table-hover').should('contain.text', emails)
    cy.get('a[href*="/Customer/Edit"]').click()
    cy.get('#Name').clear().type('QA ' + username + ' update')
    cy.get('.btn.btn-primary').click() // button save update
    cy.get('#searching').type('QA ' + username + ' update')
    cy.get('input[value="Search"]').filter('[type="submit"]').click() //button search
    cy.get('.table.table-hover').should('contain.text', 'QA ' + username + ' update')
    cy.get('a[href*="/Login/LogOut"]').click()


  })

})


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
