import prisma from '../db';

// Get all updates
export const getUpdates = async (req, res) => {
  const updates = await prisma.update.findMany({
    where: {
      product: {
        belongsToId: req.user.id,
      },
    },
  });

  res.json({ data: updates });
};

// Get update by id
export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: update });
};

export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: req.body.productId },
  });

  if (!product) {
    res.status(404);
    return res.json({ message: 'nope' });
  }

  const update = await prisma.update.create({
    data: {
      body: req.body.body,
      title: req.body.title,
      product: {
        connect: { id: req.body.productId },
      },
    },
  });

  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const update = await prisma.update.findMany({
    where: {
      id: req.params.id,
      product: {
        belongsToId: req.user.id,
      },
    },
  });

  if (!update) {
    res.status(404);
    return res.json({ message: 'nope' });
  }

  if (update.length > 1) {
    res.status(400);
    return res.json({ message: 'nope' });
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: update[0].id,
    },
    data: req.body,
  });

  res.json({ date: updatedUpdate });
};

export const deleteUpdate = async (req, res) => {
  const update = await prisma.update.findMany({
    where: {
      id: req.params.id,
      product: {
        belongsToId: req.user.id,
      },
    },
  });

  if (!update) {
    res.status(404);
    return res.json({ message: 'nope' });
  }

  if (update.length > 1) {
    res.status(400);
    return res.json({ message: 'nope' });
  }

  const deletedUpdate = await prisma.update.delete({
    where: {
      id: update[0].id,
    },
  });

  res.json({ date: deletedUpdate });
};
