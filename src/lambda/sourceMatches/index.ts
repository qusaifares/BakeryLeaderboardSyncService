import 'reflect-metadata';

// import { AwsConfig } from '../config/AwsConfig';

// const awsConfig = new AwsConfig();

export const handler = async (event: any) => {
  if (!process.env.DB_SECRET) return;
  console.log(event);
};
