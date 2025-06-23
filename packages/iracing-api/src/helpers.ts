const { createHash } = await import('node:crypto');

export const encryptPassword = (email: string, password: string) => {
    const hash = createHash('sha256')
        .update(password + email.toLowerCase())
        .digest('base64')
    
    return hash
}

// import CryptoJS from 'crypto-js'

// crypto-js is no longer maintained, dev recommends using native `crypto` module in Node
// https://github.com/brix/crypto-js
// https://nodejs.org/docs/latest/api/crypto.html#class-hash

// export const encryptPassword = (email: string, password: string) =>
//     CryptoJS.enc.Base64.stringify(
//         CryptoJS.SHA256(password + email.toLowerCase())
//     )
