import { IsString } from 'class-validator';
import { EnvironmentWithUserCommand } from '../../../shared/commands/project.command';

export class CreateFeedCommand extends EnvironmentWithUserCommand {
  @IsString()
  name: string;
}
