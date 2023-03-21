import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  /**
   * O e-mail é necessário apra o login.
   * @example email@email.com
   */
  @IsEmail()
  email: string;

  /**
   * É possível conectar com uma senha.
   * é necessário informar uma senha.
   * @example Xpto@123
   */
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  //Tem que ter Maiscula, Minuscula e numero
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Lucas Diniz
   */
  @IsString()
  name: string;
}
