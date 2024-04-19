import { PrismaClient, Paste, Visibility } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new paste
export async function createPaste(title: string | null, content: string, visibility: Visibility, expiration?: Date, userId?: string): Promise<Paste> {
  return prisma.paste.create({
    data: {
      title,
      content,
      visibility,
      expiration,
      userId
    }
  });
}

// Get a paste by ID
export async function getPasteById(pasteId: string): Promise<Paste | null> {
  return prisma.paste.findUnique({
    where: {
      id: pasteId
    }
  });
}

// Update a paste by ID
export async function updatePaste(pasteId: string, newData: Partial<Paste>): Promise<Paste | null> {
  return prisma.paste.update({
    where: {
      id: pasteId
    },
    data: newData
  });
}

// Delete a paste by ID
export async function deletePaste(pasteId: string): Promise<Paste | null> {
  return prisma.paste.delete({
    where: {
      id: pasteId
    }
  });
}

export async function updatePasteVisibilityToPublic(pasteId: string): Promise<Paste | null> {
    return prisma.paste.update({
      where: {
        id: pasteId
      },
      data: {
        visibility: Visibility.PUBLIC
      }
    });
  }
  
  // Update paste visibility to PRIVATE
  export async function updatePasteVisibilityToPrivate(pasteId: string): Promise<Paste | null> {
    return prisma.paste.update({
      where: {
        id: pasteId
      },
      data: {
        visibility: Visibility.PRIVATE
      }
    });
  }

  export async function getPastesByUserId(userId: any): Promise<Paste[]> {
    return prisma.paste.findMany({
      where: {
        userId
      }
    });
  }