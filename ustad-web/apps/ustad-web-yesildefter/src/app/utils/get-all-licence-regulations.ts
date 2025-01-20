/** Core Imports */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

/** Enum Type */
export const enum Type {
  LicenceRegulations = 'licence_regaulations',
}

/**
 * Get all documentation files in the specified type.
 */
export default function getAllLicenceRegulations(type: string) {
  const root = process.cwd();
  try {
    if (type === Type.LicenceRegulations) {
      const files = fs.readdirSync(path.join(root, 'content', type));
      const dataSource = files.map((fileSlug) => {
        const source = fs.readFileSync(
          path.join(root, 'content', type, fileSlug),
          'utf8'
        );
        const { data } = matter(source);
        debugger;
        return {
          ...data,
          slug: fileSlug.replace('.mdx', ''), // Removing .mdx extension for slug
        };
      });
      console.log(
        'Licence Regulation fetched from the server component!',
        dataSource
      );
      return dataSource;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
