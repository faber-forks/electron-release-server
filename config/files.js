/**
 * File options
 * Options which relate to filesystem storage of assets
 */
 module.exports.files = {
   // Maximum allowed file size in bytes
   // Defaults to 500MB
   maxBytes: 524288000,
   // The fs directory name at which files will be kept
   adapter: require('skipper-better-s3'),
   key: process.env.S3_API_KEY,
   secret: process.env.S3_API_SECRET,
   bucket: process.env.S3_BUCKET,
   region: process.env.S3_REGION || undefined,
   signatureVersion: process.env.S3_SIGNATURE || undefined,
   endpoint: process.env.S3_ENDPOINT || undefined,
   token: process.env.S3_TOKEN || undefined,
   s3config: {
     signatureVersion: process.env.S3_SIGNATURE || 'v4',
   }
 };
