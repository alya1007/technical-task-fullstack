import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify, type JwtPayload } from 'jsonwebtoken';

@Injectable()
export class TokenService {
  constructor(private configService: ConfigService) {}

  extractToken(
    connectionParams: { token?: unknown } | null | undefined,
  ): string | null {
    if (connectionParams && typeof connectionParams.token === 'string') {
      return connectionParams.token;
    }
    return null;
  }

  validateToken(token: string): any {
    const refreshTokenSecret = this.configService.get<string>(
      'REFRESH_TOKEN_SECRET',
    );
    try {
      return verify<JwtPayload>(token, refreshTokenSecret);
    } catch {
      return null;
    }
  }
}
