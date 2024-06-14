import crypto from 'crypto';
export function generateResetToken() {
  return crypto.randomBytes(20).toString("hex");
}

export function hashResetToken(resetToken) {
  return crypto.createHash("sha256").update(resetToken).digest("hex");
}

export async function updateUserResetToken(user, token, expires) {
  user.resetToken = token;
  user.resetTokenExpires = new Date(expires);
  await user.save();
}

export async function clearUserResetToken(user) {
  user.resetToken = undefined;
  user.resetTokenExpires = undefined;
  await user.save();
}
