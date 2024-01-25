import {jwtVerify, SignJWT} from "jose";


export const CreateToken =async (email,id) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const payload = {email,id};
  const token = await new SignJWT(payload)
      .setProtectedHeader({alg:"HS256"})
      .setIssuedAt()
      .setIssuer(process.env.JWT_ISSUER)
      .setExpirationTime(process.env.JWT_EXPATRIATION_TIME)
      .sign(secret)

    return token;
}

export const VerifyToken = async (token) => {
    const Secret =new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(token,Secret)
    return decoded['payload'] ;
}