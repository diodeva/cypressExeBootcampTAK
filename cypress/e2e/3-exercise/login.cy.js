function generateRandomUsername() {
  const timestamp = Date.now(); // menghasilkan timestamp saat ini dalam milidetik
  const randomNum = Math.floor(Math.random() * 1000); // menghasilkan nomor acak antara 0 dan 999
  const username = `user${timestamp}${randomNum}`; // menggabungkan timestamp dan nomor acak menjadi username
  return username;
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
//     cy.get('#Password').type('qwerty123')
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
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click() //button login
    cy.get('')
    cy.get('a[href*="/Login/LogOut"]').click()
    


  })

  it('positive - search customer details by name', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click()


  })

  it('positive - search customer details by email', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click()


  })

  it('negative - search customer details by phone', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('a[href*="/Login"]').click()
    cy.get('#Username').type('firstQA')
    cy.get('#Password').type('qwerty123')
    cy.get('.btn-primary').click()


  })
})


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
