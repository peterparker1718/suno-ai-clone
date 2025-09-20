# Suno AI Clone - Developer Instructions

Open source clone of Suno AI music generation platform. This codebase focuses on documenting core UI/UX patterns, AI-driven music creation workflows, and providing a structured foundation for building similar music generation applications.

**ALWAYS follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Repository Status

**IMPORTANT**: This repository is currently in initial development phase. Many commands and workflows described below represent the expected development patterns once the codebase is established. As you contribute to building out the platform, update these instructions to reflect actual validated commands and workflows.

## Prerequisites and Environment Setup

### Required Tools and Versions
- **Node.js**: Version 18.x or 20.x LTS
  - Install via: `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && nvm install 20 && nvm use 20`
- **Docker**: Latest stable version for containerized services
  - Install via: `curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh`
- **Git**: For version control
- **Modern browser**: Chrome/Firefox for testing UI components

### Development Dependencies (Expected)
Once package.json is established, the typical setup will be:
```bash
# Install all dependencies - NEVER CANCEL: May take 5-10 minutes depending on AI/ML packages
npm install
# OR if using yarn
yarn install
```

## Build and Development Workflow

### Initial Setup (Expected Commands)
```bash
# Clone and setup (first time only)
git clone <repository-url>
cd suno-ai-clone

# Install dependencies - NEVER CANCEL: Set timeout to 15+ minutes
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration
```

### Building the Application
```bash
# Development build - NEVER CANCEL: Expected 5-15 minutes for full build
npm run build:dev

# Production build - NEVER CANCEL: Expected 10-30 minutes, includes optimization
npm run build:prod
```

### Running the Application
```bash
# Start development server - NEVER CANCEL: Initial startup may take 2-5 minutes
npm run dev
# Expected: Server runs on http://localhost:3000

# Start production server
npm run start
# Expected: Server runs on configured port (default: 3000)

# Start with database services (Docker)
docker-compose up -d
npm run dev
```

### Testing
```bash
# Run unit tests - NEVER CANCEL: Set timeout to 20+ minutes
npm run test

# Run integration tests - NEVER CANCEL: Set timeout to 30+ minutes  
npm run test:integration

# Run end-to-end tests - NEVER CANCEL: Set timeout to 45+ minutes
npm run test:e2e

# Run linting and formatting
npm run lint
npm run format
```

## Key Architecture Areas

### Frontend (Expected Structure)
- **`/src/components/`**: React components for music generation UI
- **`/src/pages/`**: Main application pages and routing
- **`/src/hooks/`**: Custom React hooks for audio processing and AI integration
- **`/src/utils/`**: Utility functions for audio manipulation and API calls
- **`/src/types/`**: TypeScript type definitions

### Backend (Expected Structure)
- **`/api/`**: API routes for music generation and user management
- **`/services/`**: Business logic and AI model integration
- **`/middleware/`**: Authentication, rate limiting, and request processing
- **`/models/`**: Database models and schemas

### AI/ML Components (Expected)
- **`/ml/`**: Machine learning models and inference code
- **`/audio/`**: Audio processing and manipulation utilities
- **`/training/`**: Model training scripts and data preparation

## Validation and Testing Scenarios

### Critical User Workflows to Test
**ALWAYS run these validation scenarios after making changes:**

1. **Music Generation Flow:**
   ```bash
   # Start the application
   npm run dev
   # Navigate to http://localhost:3000
   # Test: Create new song with text prompt
   # Test: Generate 30-second audio clip
   # Test: Download generated audio file
   # Test: Share generated song
   ```

2. **User Authentication Flow:**
   ```bash
   # Test: User registration
   # Test: Email verification
   # Test: Login/logout
   # Test: Password reset
   ```

3. **Audio Playback and Controls:**
   ```bash
   # Test: Play/pause functionality
   # Test: Volume controls
   # Test: Seek/scrub through audio
   # Test: Audio quality settings
   ```

### Performance Validation
- **Audio Generation**: Should complete within 30-60 seconds for 30-second clips
- **Page Load**: Initial page load under 3 seconds
- **Audio Playback**: No latency or stuttering during playback

## Common Development Tasks

### Adding New Features
1. Create feature branch: `git checkout -b feature/feature-name`
2. Implement changes in appropriate directory structure
3. Add unit tests in `__tests__/` or `*.test.ts` files
4. Run validation: `npm run test && npm run lint`
5. Test user scenarios manually
6. Create pull request

### Working with AI Models
```bash
# Download pre-trained models (if applicable)
npm run models:download

# Train custom models (development only)
npm run models:train

# Test model inference
npm run models:test
```

### Database Operations
```bash
# Start database services
docker-compose up -d postgres redis

# Run database migrations
npm run db:migrate

# Seed development data
npm run db:seed

# Reset database (development only)
npm run db:reset
```

## Troubleshooting Common Issues

### Build Failures
- **Node version mismatch**: Use `nvm use 20` to ensure correct Node.js version
- **Memory issues**: Increase Node.js memory: `export NODE_OPTIONS="--max-old-space-size=4096"`
- **Package conflicts**: Clear cache: `npm cache clean --force && rm -rf node_modules && npm install`

### Audio Issues
- **Codec problems**: Ensure browser supports WebAudio API and required audio formats
- **Latency**: Check audio buffer size settings in configuration
- **Quality**: Verify sample rate and bit depth settings

### AI/ML Issues
- **Model loading**: Ensure models are downloaded and accessible
- **GPU acceleration**: Verify CUDA/WebGL support for model inference
- **Memory usage**: Monitor memory consumption during generation

## CI/CD and Automation

### GitHub Actions (Expected)
- **`.github/workflows/test.yml`**: Automated testing on PRs and main branch
- **`.github/workflows/build.yml`**: Build validation and artifact creation
- **`.github/workflows/deploy.yml`**: Deployment to staging and production

### Pre-commit Hooks
```bash
# Setup pre-commit hooks
npm run husky:install

# Manual pre-commit validation
npm run pre-commit
```

## Important Notes

### Performance Considerations
- **NEVER CANCEL long-running operations**: AI model inference, audio processing, and builds can take significant time
- **Set appropriate timeouts**: Build operations may require 30+ minutes, especially with AI/ML dependencies
- **Monitor resource usage**: Audio processing and AI inference are memory and CPU intensive

### Security Considerations
- **API keys**: Store in environment variables, never commit to repository
- **User data**: Implement proper data protection and privacy measures
- **Rate limiting**: Prevent abuse of expensive AI generation endpoints

### Development Environment
- **Audio drivers**: Ensure proper audio drivers for development testing
- **Browser DevTools**: Use Web Audio Inspector for debugging audio issues
- **Network**: Stable internet connection required for AI model downloads and API calls

## Getting Help

### Documentation Locations
- **API Documentation**: `/docs/api/`
- **Architecture Guide**: `/docs/architecture.md`
- **Deployment Guide**: `/docs/deployment.md`

### Common Commands Reference
```bash
# Quick development setup
npm install && npm run dev

# Full test suite
npm run test:all

# Production build and deploy
npm run build:prod && npm run deploy

# Clean and rebuild
npm run clean && npm install && npm run build
```

---

**Remember**: This is a music generation platform with AI components. Always test audio functionality and user workflows after making changes. NEVER CANCEL long-running operations - they are expected to take significant time due to the nature of AI processing and audio generation.