import React from 'react';
export const SignIn = () => {
  return (
    <div class="container hero">
      <div class="card signin">
        <div class="card-body">
          <h5 class="card-title">Sign In</h5>
          <h6 class="card-subtitle mb-2 text-muted">Use your account for sign in.</h6>
          <form>
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" required />
            <input type="password" class="form-control" id="inputPassword" placeholder="Enter password" required />
            <button type="submit" class="btn btn-primary button">
              Sign In
            </button>
          </form>
          <p class="signup">
            No account?{' '}
            <a href="/#/signup" class="card-link">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
