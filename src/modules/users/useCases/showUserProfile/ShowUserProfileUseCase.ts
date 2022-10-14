import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAdmin = this.usersRepository.findById(user_id);
    if (!userAdmin) {
      throw new Error("Id is not from on User");
    }
    return userAdmin;
  }
}

export { ShowUserProfileUseCase };
