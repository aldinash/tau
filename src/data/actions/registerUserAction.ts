"use server";

export default async function registerUserAction(formData: FormData) {
  console.log("Hello")

  const fields = {
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get('password'),
  }

  console.log(fields.name)
}