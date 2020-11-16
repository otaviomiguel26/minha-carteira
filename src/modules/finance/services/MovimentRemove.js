class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, id_moviment) {
    const find = await this.financeRepository.movimentById(id_moviment);

    if (find.user_id !== user_id)
      return { message: "you don't have permission to delete this moviment" };

    const moviment = await this.financeRepository.movimentRemove(id_moviment);
    return moviment;
  }
}

module.exports = MovimentRemove;
