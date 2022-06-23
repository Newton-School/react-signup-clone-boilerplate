import React from 'react';

export const SignUp = () => {
  return (
    <div class="container hero">
      <div class="card signin">
        <div class="card-body">
          <h5 class="card-title">Sign Up</h5>
          <h6 class="card-subtitle mb-2 text-muted">Create new account.</h6>
          <form>
            <input type="text" class="form-control" id="inputEmail" placeholder="Enter username" required />
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" required />
            <input type="password" class="form-control" id="inputPassword" placeholder="Enter password  " required />
            <button type="submit" class="btn btn-primary button">
              Sign Up
            </button>
          </form>
          <p class="signup">
            Already have an account?{' '}
            <a href="/#/signin" class="card-link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
